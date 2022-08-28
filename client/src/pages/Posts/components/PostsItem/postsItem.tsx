import {Props} from './postsItem.props';

import s from './postsItem.module.scss';

function PostsItem({title, text}: Props): JSX.Element {
	return (
		<div>
			<p>{title}</p>
			<p>{text}</p>
		</div>
	);
}

export default PostsItem;
