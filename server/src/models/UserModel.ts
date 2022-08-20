import {Schema, model} from 'mongoose';
import IUser from '@/types/IUser';

const schema = new Schema<IUser>({
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
	},
	name: {
		type: String
	},
	surname: {
		type: String
	},
	age: {
		type: Number
	},
	image: {
		type: String
	}
});

const userModel = model<IUser>('User', schema);

export default userModel;
