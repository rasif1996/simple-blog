import {Schema, model, Document} from 'mongoose';
import IToken from '@/types/IToken';

const schema = new Schema<IToken>({
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	refreshToken: {
		type: String,
		required: true
	}
});

const tokenModel = model<IToken & Document>('Token', schema);

export default tokenModel;
