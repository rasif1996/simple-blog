import {Request, Response, NextFunction} from 'express';
import userService from '@/services/userService';

class UserController {
	async getUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await userService.getUsers();

			res.json(users);
		} catch (e) {
			next(e);
		}
	}

	async updateUser(req: Request, res: Response, next: NextFunction) {
		try {
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
		} catch (e) {
			next(e);
		}
	}

	async getUser(req: Request, res: Response, next: NextFunction) {
		try {
			res.send('Getting a user');
		} catch (e) {
			next(e);
		}
	}

	async deleteUser(req: Request, res: Response, next: NextFunction) {
		try {
			res.send('Deleting a user');
		} catch (e) {
			next(e);
		}
	}

	async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			res.send('Creating a user');
		} catch (e) {
			next(e);
		}
	}

	async getItemsOfUser(req: Request, res: Response, next: NextFunction) {
		try {
			res.send('Get items of user');
		} catch (e) {
			next(e);
		}
	}
}

export default new UserController();
