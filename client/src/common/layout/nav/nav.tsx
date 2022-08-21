import {useDispatch, useSelector} from 'react-redux';
import menuItems from '../../routes/menuItems';
import NavItem from './NavItem';
import useAppStore from '../../../hooks/useAppStore';

import styles from './nav.module.scss';

function Nav() {
	const {
		select: {auth}
	} = useAppStore();

	const {
		auth: {logout}
	} = useDispatch();

	const isAuthorized = useSelector(auth.getIsAuthorized);

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
