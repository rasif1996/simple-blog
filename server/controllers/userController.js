const userService = require('../services/userService');

class UserController {
	async getUsers(req, res, next) {
		try {
			const users = await userService.getUsers();

			res.json(users);
		} catch (e) {
			next(e);
		}
	}

	async updateUser(req, res, next) {
		try {
			const {id} = req.params;
			const data = req.body;

			const info = await userService.updateUser(id, data);

			res.json(info);
		} catch (e) {
			next(e);
		}
	}

	async getUser(req, res) {
		try {
			const users = await userService.getUsers();

			res.send(users);
		} catch (e) {
			next(e);
		}
	}

	async deleteUser(req, res) {
		try {
			const users = await userService.getUsers();

			res.send(users);
		} catch (e) {
			next(e);
		}
	}

	async createUser(req, res) {
		try {
			const users = await userService.getUsers();

			res.send(users);
		} catch (e) {
			next(e);
		}
	}

	async getItemsOfUser(req, res) {
		try {
			const users = await userService.getUsers();

			res.send(users);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new UserController();
