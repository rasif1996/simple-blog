import UserDto from '@/dtos/user.dto';
import {DeleteResult} from 'mongodb';
import {TokensType, LoginResponseType} from '@/types';
import {JwtPayload} from 'jsonwebtoken';
import {Types} from 'mongoose';
import AccountDto from '@/dtos/account.dto';
import {IUserModel, ITokenModel} from '@/types/models.types';
import PostDto from '@/dtos/post.dto';

export interface IAuthService {
	registration(email: string, password: string): Promise<UserDto>;
	login(email: string, password: string): Promise<LoginResponseType>;
	logout(refreshToken: string): Promise<void>;
	refresh(refreshToken: string): Promise<any>;
	activate(activationLink: string): Promise<UserDto>;
}

export interface IBcryptService {
	encrypt(password: string): string;
	compare(password: string, encryptedPassword: string): boolean;
}

export interface IMailService {
	sendActivationMail(to: string, link: string): void;
}

export interface ITokenService {
	generateTokens(payload: UserDto): TokensType;
	validateAccessToken(token: string): string | JwtPayload;
	validateRefreshToken(token: string): string | JwtPayload;
	findToken(refreshToken: string): Promise<ITokenModel>;
	removeToken(refreshToken: string): Promise<DeleteResult>;
	saveToken(userId: Types.ObjectId, refreshToken: string): Promise<ITokenModel>;
}

export interface IUserService {
	getUsers(): Promise<IUserModel[]>;
	updateUser(id: string, data: any): Promise<AccountDto>;
}

export interface IPostsService {
	createPost(userId: string, title: string, text: string): Promise<PostDto>;
}
