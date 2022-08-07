const dotenv = require('dotenv');
const express = require('express');
const configure = require('./settings/configure');
const database = require('./settings/database');

dotenv.config();

const PORT = process.env.PORT || 5000;

database(() => {
	const app = express();

	configure(app);

	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
});
