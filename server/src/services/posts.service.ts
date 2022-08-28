import PostDto from '@/dtos/post.dto';
import ApiError from '@/exceptions/ApiError';
import PostModel from '@/models/post.model';
import UserModel from '@/models/user.model';
import {IPostModel} from '@/types/models.types';
import {IPostsService} from '@/types/services.types';

class PostsService implements IPostsService {
	async getPosts(): Promise<PostDto[]> {
		const posts = await PostModel.find();

		return this.transformAllToDto(posts);
	}

	async createPost(userId: string, title: string, text: string): Promise<PostDto> {
		const user = await UserModel.findById(userId);

		if (!user) {
			throw ApiError.Unathorized();
		}

		const post = await PostModel.create({title, text, userId});

		user.posts.push(post);

		return this.transformOneToDto(post);
	}

	private transformOneToDto(post: IPostModel): PostDto {
		return new PostDto(post);
	}

	private transformAllToDto(posts: IPostModel[]): PostDto[] {
		let dtos: PostDto[] = [];

		dtos = posts.map(post => new PostDto(post));

		return dtos;
	}
}

export default new PostsService();
