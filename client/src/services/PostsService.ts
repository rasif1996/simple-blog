import api from '../http';
import {CreatePostFormType} from '../types/forms';
import {IPost} from '../types/models';
import {IPostsService} from '../types/services';

class PostsService implements IPostsService {
	async getPosts(): Promise<IPost[]> {
		return await api.posts.getPosts();
	}
	async createPost(data: CreatePostFormType): Promise<IPost> {
		return await api.posts.createPost(data);
	}
}

export default new PostsService();
