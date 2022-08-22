import {Types} from 'mongoose';

export interface IUserModel {
	_id: Types.ObjectId;
	email: string;
	password: string;
	isActivated: boolean;
	activationLink: string;
	name?: string;
	surname?: string;
	age?: number;
	image?: string;
}

export interface ITokenModel {
	user: Types.ObjectId;
	refreshToken: string;
}
