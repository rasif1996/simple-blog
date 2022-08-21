import Container from '../container';
import Nav from '../nav';

import styles from './header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<Container>
				<Nav />
			</Container>
		</header>
	);
}

export default Header;
