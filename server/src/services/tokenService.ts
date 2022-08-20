import jwt, {JwtPayload} from 'jsonwebtoken';
import TokenModel from '@/models/TokenModel';
import {DeleteResult} from 'mongodb';
import UserDto from '@/dtos/userDto';
import {TokensType} from '@/types';
import IToken from '@/types/IToken';
import ITokenService from '@/types/ITokenService';
import {Types} from 'mongoose';

class TokenService implements ITokenService {
	generateTokens(payload: UserDto): TokensType {
		const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '20s'});
		const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {expiresIn: '30d'});

		return {
			accessToken,
			refreshToken
		};
	}

	async saveToken(userId: Types.ObjectId, refreshToken: string): Promise<IToken> {
		const token = await TokenModel.findOne({user: userId});

		if (token) {
			token.refreshToken = refreshToken;

			return await token.save();
		}

		return TokenModel.create({user: userId, refreshToken});
	}

	validateAccessToken(token: string): string | JwtPayload {
		try {
			return jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
		} catch (e) {
			return '';
		}
	}

	validateRefreshToken(token: string): string | JwtPayload {
		try {
			return jwt.verify(token, process.env.SECRET_REFRESH_TOKEN);
		} catch (e) {
			return '';
		}
	}

	async findToken(refreshToken: string): Promise<IToken> {
		return await TokenModel.findOne({refreshToken});
	}

	async removeToken(refreshToken: string): Promise<DeleteResult> {
		return await TokenModel.deleteOne({refreshToken});
	}
}

export default new TokenService();
