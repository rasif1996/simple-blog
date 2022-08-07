const {Schema, model} = require('mongoose');

const schema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		required: true
	},
	refreshToken: {
		type: String,
		required: true
	}
});

const tokenModel = model('Token', schema);

module.exports = tokenModel;
