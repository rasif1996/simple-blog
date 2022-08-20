import express, {Request, Response, Express} from 'express';
import bodyParser from 'body-parser';
import cookie from 'cookie-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import errorMiddleware from '@/middlewares/errorMiddleware';
import router from '@/v1/routers';

const configure = (app: Express) => {
	app.use(fileUpload());

	app.use(
		cors({
			origin: process.env.CLIENT_URL,
			credentials: true
		})
	);

	app.use(express.static('public'));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.use(cookie());

	app.use(router);

	app.use('*', (req: Request, res: Response) => {
		res.status(404).json({message: 'Page not found'});
	});

	app.use(errorMiddleware);
};

export default configure;
