import Container from '../container';

import styles from './footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<p>Footer</p>
			</Container>
		</footer>
	);
}

export default Footer;
