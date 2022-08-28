import PostDto from '@/dtos/post.dto';
import ApiError from '@/exceptions/ApiError';
import PostModel from '@/models/post.model';
import UserModel from '@/models/user.model';
import {IPostsService} from '@/types/services.types';

class PostsService implements IPostsService {
	async createPost(userId: string, title: string, text: string): Promise<PostDto> {
		const user = await UserModel.findById(userId);

		if (!user) {
			throw ApiError.Unathorized();
		}

		const post = await PostModel.create({title, text, userId});

		user.posts.push(post);

		const postDto = new PostDto(post);

		return postDto;
	}
}

export default new PostsService();
