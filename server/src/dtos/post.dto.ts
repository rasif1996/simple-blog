import {IPostModel} from '@/types/models.types';
import {Types} from 'mongoose';

class PostDto {
	readonly title: string;
	readonly text: string;
	readonly id: Types.ObjectId;

	constructor(model: IPostModel) {
		this.title = model.title;
		this.text = model.text;
		this.id = model._id;
	}
}

export default PostDto;
