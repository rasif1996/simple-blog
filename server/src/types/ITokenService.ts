import UserDto from '@/dtos/userDto';
import {TokensType} from '@/types';
import {JwtPayload} from 'jsonwebtoken';
import {DeleteResult} from 'mongodb';
import {Types} from 'mongoose';
import IToken from './IToken';

interface ITokenService {
	generateTokens(payload: UserDto): TokensType;
	validateAccessToken(token: string): string | JwtPayload;
	validateRefreshToken(token: string): string | JwtPayload;
	findToken(refreshToken: string): Promise<IToken>;
	removeToken(refreshToken: string): Promise<DeleteResult>;
	saveToken(userId: Types.ObjectId, refreshToken: string): Promise<IToken>;
}

export default ITokenService;
