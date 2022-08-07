const UserModel = require('../models/UserModel');

class UserController {
	async getUsers(req, res) {
		const users = await UserModel.find({});

		res.json({message: 'Ok', users});
	}
}

module.exports = new UserController();
