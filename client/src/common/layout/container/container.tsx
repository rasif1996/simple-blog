import {Props} from './container.props';

import styles from './container.module.scss';

function Container({children}: Props): JSX.Element {
	return <div className={styles.container}>{children}</div>;
}

export default Container;
