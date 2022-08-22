import {Schema, model, Document} from 'mongoose';
import bcryptService from '@/services/bcrypt.service';
import IUser from '@/types/IUser';
import {v4} from 'uuid';
import {NextFunction} from 'express';

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

schema.pre('validate', async function (next: NextFunction) {
	const user = this;

	user.activationLink = v4();

	next();
});

schema.pre('save', async function (next: NextFunction) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcryptService.encrypt(user.password);
	}

	next();
});

const userModel = model<IUser & Document>('User', schema);

export default userModel;
