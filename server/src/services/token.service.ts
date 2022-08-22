import jwt, {JwtPayload} from 'jsonwebtoken';
import TokenModel from '@/models/token.model';
import {DeleteResult} from 'mongodb';
import UserDto from '@/dtos/user.dto';
import {TokensType} from '@/types';
import {ITokenModel} from '@/types/models.types';
import {ITokenService} from '@/types/services.types';
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

	async saveToken(userId: Types.ObjectId, refreshToken: string): Promise<ITokenModel> {
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

	async findToken(refreshToken: string): Promise<ITokenModel> {
		return await TokenModel.findOne({refreshToken});
	}

	async removeToken(refreshToken: string): Promise<DeleteResult> {
		return await TokenModel.deleteOne({refreshToken});
	}
}

export default new TokenService();
