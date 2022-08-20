import {Schema, model} from 'mongoose';
import IToken from '@/types/IToken';

const schema = new Schema<IToken>({
	user: {
		type: Schema.Types.ObjectId,
		required: true
	},
	refreshToken: {
		type: String,
		required: true
	}
});

const tokenModel = model<IToken>('Token', schema);

export default tokenModel;
