import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cookie from 'cookie-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import errorMiddleware from '@/middlewares/error.middleware';
import router from '@/v1/routers';
import mongoose from 'mongoose';
import path from 'path';

class App {
	private app: Application;

	constructor() {
		this.app = express();

		this.connectToTheDatabase();
		this.initializeMiddlewares();
		this.initializeRouter();
		this.initializeErrorHandling();
	}

	public listen() {
		const PORT = process.env.PORT || 5000;
		const serverInfo = `Server is running on port: ${PORT}`;

		this.app.listen(PORT, () => {
			console.log(serverInfo);
		});
	}

	private initializeMiddlewares() {
		this.app.use(fileUpload());
		this.app.use(
			cors({
				origin: process.env.CLIENT_URL,
				credentials: true
			})
		);
		this.app.use(express.static('public'));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: true}));
		this.app.use(cookie());
	}

	private initializeRouter() {
		this.app.use(router);

		this.app.use('*', (req: Request, res: Response) => {
			res.status(404).json({message: 'Page not found'});
		});
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}

	private connectToTheDatabase() {
		const {DB_URL, DB_NAME} = process.env;

		mongoose.connect(`${DB_URL}/${DB_NAME}`);
	}
}

export default App;
