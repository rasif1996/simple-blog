import mongoose from 'mongoose';
import {StartAppType} from '@/types';

const database = (start: StartAppType) => {
	mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

	mongoose.connection.on('error', error => {
		console.log('Something happened with db ' + error);
	});

	mongoose.connection.on('connected', () => {
		console.log(`Database is connected to ${process.env.DB_NAME}`);

		start();
	});

	mongoose.connection.on('disconnected', () => {
		console.log(`Database is disconnected from ${process.env.DB_NAME}`);
	});
};

export default database;
