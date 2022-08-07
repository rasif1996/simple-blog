const authService = require('../services/authService');

class AuthController {
	async registration(req, res, next) {
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

	async login(req, res, next) {
		try {
			const {email, password} = req.body;

			const userData = await authService.login(email, password);

			res.cookie('refreshToken', userData.refreshToken, {maxAge: 3600 * 24 * 30, httpOnly: true});

			return res.json({
				message: 'Logged in successfully',
				...userData
			});
		} catch (e) {
			next(e);
		}
	}

	async logout(req, res, next) {
		try {
			const {refreshToken} = req.cookies;

			await authService.logout(refreshToken);

			res.clearCookie('refreshToken');

			return res.json({message: 'Logouted'});
		} catch (e) {
			next(e);
		}
	}

	async refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies;

			const userData = await authService.refresh(refreshToken);

			res.cookie('refreshToken', userData.refreshToken, {maxAge: 3600 * 24 * 30, httpOnly: true});

			return res.json({
				message: 'Refreshed successfully',
				...userData
			});
		} catch (e) {
			next(e);
		}
	}

	async activate(req, res, next) {
		try {
			const {link} = req.params;

			await authService.activate(link);

			res.redirect(`${process.env.CLIENT_URL}`);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new AuthController();
