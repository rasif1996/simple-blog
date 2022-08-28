import {Props} from './input.props';

import styles from './input.module.scss';

function Input<TFormValues>({label, name, register, errors, ...rest}: Props<TFormValues>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<span className={styles.label}>{label}</span>
				<input className={styles.input} type='text' {...rest} {...(register && register(name))} />
			</div>
			{errors && errors[name as string] && <p className={styles.error}>{errors[name as string].message}</p>}
		</div>
	);
}

export default Input;
