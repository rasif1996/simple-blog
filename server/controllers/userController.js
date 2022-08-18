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
			let data = req.body.info ? JSON.parse(req.body.info) : {};
			const image = req.files?.image;

			if (image) {
				const imagePath = `/images/${image.name}`;

				image.mv('public' + imagePath);

				data = {...data, image: `${process.env.SERVER_URL}:${process.env.PORT}${imagePath}`};
			}

			const {id} = res.user;

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
