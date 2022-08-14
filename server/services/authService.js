const UserModel = require('../models/UserModel');
const ApiError = require('../exceptions/ApiError');
const bcryptService = require('./bcryptService');
const {v4} = require('uuid');
const UserDto = require('../dtos/userDto');
const tokenService = require('./tokenService');
const AccountDto = require('../dtos/accountDto');

class AuthService {
	async registration(email, password) {
		const hashPassword = bcryptService.encrypt(password);
		const activationLink = v4();

		// await mailService.sendActivationMail(
		// 	email,
		// 	`${process.env.SERVER_URL}:${process.env.PORT}/activate/${activationLink}`
		// );

		const user = await UserModel.create({email, password: hashPassword, activationLink});
		const userDto = new UserDto(user);

		return userDto;
	}

	async login(email, password) {
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

	async logout(refreshToken) {
		if (!refreshToken) {
			throw ApiError.Unathorized();
		}

		const token = await tokenService.removeToken(refreshToken);

		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.Unathorized();
		}

		const token = tokenService.validateRefreshToken(refreshToken);
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

	async activate(activationLink) {
		const user = await UserModel.findOne({activationLink});

		if (!user) {
			throw ApiError.BadRequest('Ссылка активации не верна');
		}

		user.isActivated = true;

		return user;
	}
}

module.exports = new AuthService();
