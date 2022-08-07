const {Schema, model} = require('mongoose');

const schema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isActivated: {
		type: Boolean,
		default: false
	},
	activationLink: {
		type: String,
		required: true
	}
});

const userModel = model('User', schema);

module.exports = userModel;
