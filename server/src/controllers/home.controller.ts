import {Request, Response} from 'express';

class HomeController {
	index(req: Request, res: Response) {
		res.send('It is really working');
	}
}

export default new HomeController();
