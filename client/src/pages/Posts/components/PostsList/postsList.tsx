import {Link} from 'react-router-dom';

import s from './postsList.module.scss';

function PostsLists(): JSX.Element {
	return (
		<>
			<Link className={s.link} to='/posts/create'>
				Create one
			</Link>
			<p>Posts Lists</p>
		</>
	);
}

export default PostsLists;
