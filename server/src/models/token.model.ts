import {Schema, model, Document} from 'mongoose';
import {ITokenModel} from '@/types/models.types';

const schema = new Schema({
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

const tokenModel = model<ITokenModel & Document>('Token', schema);

export default tokenModel;
