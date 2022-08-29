import {Request, Response, NextFunction} from 'express';
import authService from '@/services/auth.service';
import {THIRTY_DAYS} from '@/constants';

class AuthController {
	async registration(req: Request, res: Response, next: NextFunction) {
		const {email, password} = req.body;

		const userData = await authService.registration(email, password);

		res.json(userData);
	}

	async login(req: Request, res: Response, next: NextFunction) {
		const {email} = req.body;

		const userData = await authService.login(email);

		res.cookie('refreshToken', userData.tokens.refreshToken, {maxAge: THIRTY_DAYS, httpOnly: true});

		res.json(userData);
	}

	async logout(req: Request, res: Response, next: NextFunction) {
		const {refreshToken} = req.cookies;

		await authService.logout(refreshToken);

		res.clearCookie('refreshToken');

		res.json({status: 200});
	}

	async refresh(req: Request, res: Response, next: NextFunction) {
		const {refreshToken} = req.cookies;

		const userData = await authService.refresh(refreshToken);

		res.cookie('refreshToken', userData.tokens.refreshToken, {maxAge: THIRTY_DAYS, httpOnly: true});

		res.json(userData);
	}

	async activate(req: Request, res: Response, next: NextFunction) {
		const {link} = req.params;

		await authService.activate(link);

		res.redirect(`${process.env.CLIENT_URL}`);
	}
}

export default new AuthController();
