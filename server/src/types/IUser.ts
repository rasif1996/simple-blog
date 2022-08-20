import {Types} from 'mongoose';

interface IUser {
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

export default IUser;
