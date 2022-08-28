import {CreatePostFormType} from '../../types/forms';
import {IPost} from '../../types/models';
import {privateAxios} from '../axios';
import {responseBody} from '../helpers';

const api = {
	createPost(data: CreatePostFormType): Promise<IPost> {
		return privateAxios.post<IPost>('/api/posts/create', data).then(responseBody);
	}
};

export default api;
