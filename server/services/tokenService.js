const jwt = require('jsonwebtoken');
const TokenModel = require('../models/TokenModel');

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '20s'});
		const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {expiresIn: '30d'});

		return {
			accessToken,
			refreshToken
		};
	}

	async saveToken(userId, refreshToken) {
		const token = await TokenModel.findOne({user: userId});

		if (token) {
			token.refreshToken = refreshToken;

			return await token.save();
		}

		return TokenModel.create({user: userId, refreshToken});
	}

	validateAccessToken(token) {
		try {
			return jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
		} catch (e) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			return jwt.verify(token, process.env.SECRET_REFRESH_TOKEN);
		} catch (e) {
			return null;
		}
	}

	async findToken(refreshToken) {
		return await TokenModel.findOne({refreshToken});
	}

	async removeToken(refreshToken) {
		return await TokenModel.deleteOne({refreshToken});
	}
}

module.exports = new TokenService();
