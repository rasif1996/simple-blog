import UserModel from '@/models/UserModel';
import ApiError from '@/exceptions/ApiError';
import bcryptService from './bcryptService';
import {v4} from 'uuid';
import UserDto from '@/dtos/userDto';
import tokenService from './tokenService';
import AccountDto from '@/dtos/accountDto';
import {DeleteResult} from 'mongodb';
import IUser from '@/types/IUser';

class AuthService {
	async registration(email: string, password: string): Promise<UserDto> {
		const hashPassword = bcryptService.encrypt(password);
		const activationLink = v4();

		const user = await UserModel.create({email, password: hashPassword, activationLink});
		const userDto = new UserDto(user);

		return userDto;
	}

	async login(email: string, password: string) {
		const user = await UserModel.findOne({email});

		if (!user) {
			throw ApiError.BadRequest('Данный email не существует', [{param: 'email', msg: 'Почта существует'}]);
		}

		if (!bcryptService.compare(password, user.password)) {
			throw ApiError.BadRequest('Неверный пароль', [{param: 'password', msg: 'Неверный пароль'}]);
		}

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
