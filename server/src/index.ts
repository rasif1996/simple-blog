import 'module-alias/register';
import * as dotenv from 'dotenv';
import express from 'express';
import configure from '@/settings/configure';
import database from '@/settings/database';

dotenv.config();

const PORT = process.env.PORT || 5000;

database(() => {
	const app = express();

	configure(app);

	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
});
