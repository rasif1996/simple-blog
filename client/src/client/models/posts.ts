import type {RootModel} from '.';
import {createModel} from '@rematch/core';
import {CreatePostFormType} from '../../types/forms';
import PostsService from '../../services/PostsService';
import {IPost} from '../../types/models';
import history from '../../common/history';

type PostsStateType = {
	posts: IPost[];
};

const initialState: PostsStateType = {
	posts: []
};

const posts = createModel<RootModel>()({
	name: 'posts',
	state: initialState,
	reducers: {
		setPosts(state, data: IPost[]) {
			state.posts = data;
		}
	},
	effects: dispatch => ({
		async fetchPosts() {
			const posts = await PostsService.getPosts();

			dispatch.posts.setPosts(posts);
		},
		async createPost(data: CreatePostFormType) {
			await PostsService.createPost(data);

			history.push('/posts');
		}
	}),
	selectors: slice => ({
		getPosts() {
			return slice(state => state.posts);
		}
	})
});

export default posts;
