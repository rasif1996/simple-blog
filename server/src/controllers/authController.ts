import {Request, Response, NextFunction} from 'express';
import authService from '@/services/authService';
import {THIRTY_DAYS} from '@/constants';

class AuthController {
	async registration(req: Request, res: Response, next: NextFunction) {
		try {
			const {email, password} = req.body;

			const userData = await authService.registration(email, password);

			return res.json({
				message: 'Registered successfully',
				user: userData
			});
		} catch (e) {
			next(e);
		}
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const {email, password} = req.body;

			const userData = await authService.login(email, password);

			res.cookie('refreshToken', userData.refreshToken, {maxAge: THIRTY_DAYS, httpOnly: true});

			return res.json({
				message: 'Logged in successfully',
				...userData
			});
		} catch (e) {
			next(e);
		}
	}

	async logout(req: Request, res: Response, next: NextFunction) {
		try {
			const {refreshToken} = req.cookies;

			await authService.logout(refreshToken);

			res.clearCookie('refreshToken');

			return res.json({message: 'Logouted'});
		} catch (e) {
			next(e);
		}
	}

	async refresh(req: Request, res: Response, next: NextFunction) {
		try {
			const {refreshToken} = req.cookies;

			const userData = await authService.refresh(refreshToken);

			res.cookie('refreshToken', userData.refreshToken, {maxAge: THIRTY_DAYS, httpOnly: true});

			return res.json({
				message: 'Refreshed successfully',
				...userData
			});
		} catch (e) {
			next(e);
		}
	}

	async activate(req: Request, res: Response, next: NextFunction) {
		try {
			const {link} = req.params;

			await authService.activate(link);

			res.redirect(`${process.env.CLIENT_URL}`);
		} catch (e) {
			next(e);
		}
	}
}

export default new AuthController();
