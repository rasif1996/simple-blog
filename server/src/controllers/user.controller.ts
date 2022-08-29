import {Request, Response, NextFunction} from 'express';
import userService from '@/services/user.service';

class UserController {
	async getUsers(req: Request, res: Response) {
		const users = await userService.getUsers();

		res.json(users);
	}

	async updateUser(req: Request, res: Response) {
		let data = req.body.info ? JSON.parse(req.body.info) : {};
		const image = req.files?.image;

		if (image) {
			const imagePath = `/images/${image.name}`;

			image.mv('public' + imagePath);

			data = {...data, image: `${process.env.SERVER_URL}:${process.env.PORT}${imagePath}`};
		}

		const {id} = req.user;

		const info = await userService.updateUser(id, data);

		res.json(info);
	}

	async getUser(req: Request, res: Response) {
		res.send('Getting a user');
	}

	async deleteUser(req: Request, res: Response) {
		res.send('Deleting a user');
	}

	async createUser(req: Request, res: Response) {
		res.send('Creating a user');
	}

	async getItemsOfUser(req: Request, res: Response) {
		res.send('Get items of user');
	}
}

export default new UserController();
