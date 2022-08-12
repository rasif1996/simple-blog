import {useDispatch, useSelector, useStore} from 'react-redux';
import menuItems from '../../routes/menuItems';
import NavItem from './NavItem';

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
				{menuItems.map((item, index) => (
					<NavItem key={`${item.label}-${index}`} item={item} />
				))}
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
