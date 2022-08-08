import Container from '../container';

import styles from './main.module.scss';

function Main({children}) {
	return (
		<main className={styles.main}>
			<Container>{children}</Container>
		</main>
	);
}

export default Main;
