import Posts from '../posts';
import PostsCreate from '../pages/PostsCreate/postsCreate';

const routes = [
	{
		path: '/posts',
		element: <Posts />
	},
	{
		path: '/posts/create',
		element: <PostsCreate />
	}
];

export default routes;
