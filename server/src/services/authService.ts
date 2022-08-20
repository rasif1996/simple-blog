import UserModel from '@/models/UserModel';
import ApiError from '@/exceptions/ApiError';
import bcryptService from './bcryptService';
import UserDto from '@/dtos/userDto';
import tokenService from './tokenService';
import AccountDto from '@/dtos/accountDto';
import {DeleteResult} from 'mongodb';

class AuthService {
	async registration(email: string, password: string): Promise<UserDto> {
		const user = await UserModel.create({email, password});
		const userDto = new UserDto(user);

		return userDto;
	}

	async login(email: string, password: string) {
		const foundUser = await UserModel.findOne({email});

		if (!foundUser) {
			throw ApiError.BadRequest('Данный email не существует', [{param: 'email', msg: 'Почта существует'}]);
		}

		const isMatch = bcryptService.compare(password, foundUser.password);

		if (!isMatch) {
			throw ApiError.BadRequest('Неверный пароль', [{param: 'password', msg: 'Неверный пароль'}]);
		}

		const userDto = new UserDto(foundUser);
		const accountDto = new AccountDto(foundUser);

		const tokens = tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: {
				...userDto,
				info: accountDto
			}
		};
	}

	async logout(refreshToken: string): Promise<DeleteResult> {
		if (!refreshToken) {
			throw ApiError.Unathorized();
		}

		const token = await tokenService.removeToken(refreshToken);

		return token;
	}

	async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.Unathorized();
		}

		const token: any = tokenService.validateRefreshToken(refreshToken);
		const tokenDb = await tokenService.findToken(refreshToken);

		if (!tokenDb || !token) {
			throw ApiError.Unathorized();
		}

		const user = await UserModel.findOne({email: token.email});
		const userDto = new UserDto(user);
		const accountDto = new AccountDto(user);

		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: {
				...userDto,
				info: accountDto
			}
		};
	}

	async activate(activationLink: string): Promise<UserDto> {
		const user = await UserModel.findOne({activationLink});

		if (!user) {
			throw ApiError.BadRequest('Ссылка активации не верна');
		}

		user.isActivated = true;

		await user.save();

		const userData = new UserDto(user);

		return userData;
	}
}

export default new AuthService();
