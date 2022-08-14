const UserModel = require('../models/UserModel');
const ApiError = require('../exceptions/ApiError');
const AccountDto = require('../dtos/accountDto');

class UserService {
	async getUsers() {
		const users = await UserModel.find({});

		return users;
	}

	async updateUser(id, data) {
		let user = await UserModel.findById(id);

		if (!user) {
			throw ApiError.BadRequest('Пользователь не найден');
		}

		user = Object.assign(user, data);

		const newUser = await user.save();

		const info = new AccountDto(newUser);

		return info;
	}
}

module.exports = new UserService();
