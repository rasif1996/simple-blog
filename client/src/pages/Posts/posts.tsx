import s from './posts.module.scss';
import PostsList from './components/PostsList';

function Posts(): JSX.Element {
	return (
		<>
			<h1 className={s.title}>All posts here</h1>
			<PostsList />
		</>
	);
}

export default Posts;
