import {Schema, model, Document} from 'mongoose';
import {IPostModel} from '@/types/models.types';

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		slug: 'title',
		unique: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}
});

const PostModel = model<IPostModel & Document>('Post', schema);

export default PostModel;
