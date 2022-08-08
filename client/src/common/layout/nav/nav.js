import {Link} from 'react-router-dom';
import {useDispatch, useSelector, useStore} from 'react-redux';

import styles from './nav.module.scss';

function Nav() {
	const {
		select: {auth}
	} = useStore();

	const isAuthorized = useSelector(auth.getIsAuthorized);

	const {
		auth: {logout}
	} = useDispatch();

	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link} to='/'>
						Home
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} to='/users'>
						Users
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} to='/login'>
						Login
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} to='/signup'>
						Signup
					</Link>
				</li>
				{isAuthorized && (
					<li className={styles.item}>
						<button onClick={logout}>Log out</button>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
