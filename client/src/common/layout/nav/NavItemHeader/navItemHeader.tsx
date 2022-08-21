import NavItem from '../NavItem';
import cn from 'classnames';
import {Props} from './navItemHeader.props';

import styles from '../nav.module.scss';

function NavItemHeader({item, to, depth = 0}: Props): JSX.Element {
	return (
		<li className={cn(styles.item, !depth && styles['item-margin'])}>
			<span>{item.label}</span>
			<ul className={cn(styles.subList, depth >= 1 && styles.underSubList)}>
				{item.children &&
					item.children.length !== 0 &&
					item.children.map((navItem, index) => (
						<NavItem
							key={`${navItem.label}-${index}`}
							to={`${to}${navItem.to}`}
							item={navItem}
							depth={depth + 1}
						/>
					))}
			</ul>
		</li>
	);
}

export default NavItemHeader;
