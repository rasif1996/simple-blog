const mongoose = require('mongoose');

const database = start => {
	mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

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

module.exports = database;
