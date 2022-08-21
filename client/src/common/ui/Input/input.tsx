import styles from './input.module.scss';

function Input({label, name, register, errors, ...rest}: any) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<span className={styles.label}>{label}</span>
				<input className={styles.input} type='text' {...register(name)} {...rest} />
			</div>
			{errors && errors[name] && <p className={styles.error}>{errors[name].message}</p>}
		</div>
	);
}

export default Input;
