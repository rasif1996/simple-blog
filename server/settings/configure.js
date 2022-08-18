const express = require('express');
const router = require('../v1/routers');
const bodyParser = require('body-parser');
const errorMiddleware = require('../middlewares/errorMiddleware');
const cookie = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const configure = app => {
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

	app.use('*', (req, res) => {
		res.status(404).json({message: 'Page not found'});
	});

	app.use(errorMiddleware);
};

module.exports = configure;
