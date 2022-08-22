import UserModel from '@/models/user.model';
import ApiError from '@/exceptions/ApiError';
import UserDto from '@/dtos/user.dto';
import tokenService from './token.service';
import AccountDto from '@/dtos/account.dto';
import RegistrationDto from '@/dtos/registration.dto';
import {LoginResponseType} from '@/types';
import {IAuthService} from '@/types/services.types';

class AuthService implements IAuthService {
	async registration(email: string, password: string): Promise<RegistrationDto> {
		const user = await UserModel.create({email, password});

		const userDto = new RegistrationDto(user);

		return userDto;
	}

	async login(email: string): Promise<LoginResponseType> {
		const foundUser = await UserModel.findOne({email});

		const registrationDto = new RegistrationDto(foundUser);
		const accountDto = new AccountDto(foundUser);
		const userDto = new UserDto(foundUser);

		const tokens = tokenService.generateTokens({...registrationDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			tokens,
			user: {
				...userDto,
				info: accountDto
			}
		};
	}

	async logout(refreshToken: string): Promise<void> {
		if (!refreshToken) {
			throw ApiError.Unathorized();
		}

		await tokenService.removeToken(refreshToken);
	}

	async refresh(refreshToken: string): Promise<LoginResponseType> {
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
			tokens,
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
