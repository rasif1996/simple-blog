import {Link} from 'react-router-dom';
import NavItemHeader from '../NavItemHeader';
import cn from 'classnames';
import {useAuthContext} from '../../../contexts/AuthContext';
import {Props} from './navItem.props';

import styles from '../nav.module.scss';

function NavItem({item, to, depth = 0}: Props): JSX.Element {
	const isAuthorized = useAuthContext();

	if (item.authRequired && !isAuthorized) {
		return;
	}

	if (item.children && item.children.length) {
		return <NavItemHeader item={item} to={to || item.to} depth={depth} />;
	}

	return (
		<li className={cn(styles.item, !depth && styles['item-margin'])}>
			<Link className={styles.link} to={to || item.to}>
				{item.label}
			</Link>
		</li>
	);
}

export default NavItem;
