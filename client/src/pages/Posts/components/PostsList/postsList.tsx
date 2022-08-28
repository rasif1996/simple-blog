import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import useAppStore from '../../../../hooks/useAppStore';
import PostsItem from '../PostsItem';

import s from './postsList.module.scss';

function PostsLists(): JSX.Element {
	const {
		select: {posts}
	} = useAppStore();

	const {
		posts: {fetchPosts}
	} = useAppDispatch();

	const allPosts = useAppSelector(posts.getPosts);

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			<Link className={s.link} to='/posts/create'>
				Create one
			</Link>
			{allPosts &&
				allPosts.length !== 0 &&
				allPosts.map(post => <PostsItem key={post.id} title={post.title} text={post.text} />)}
		</>
	);
}

export default PostsLists;
