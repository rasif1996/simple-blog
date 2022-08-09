import Input from '../../common/ui/Input/input';
import useOwnForm from '../../hooks/useOwnForm';
import schema from '../../common/validations/loginValidation';

import styles from './login.module.scss';

function Login() {
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useOwnForm({schema});

	const onSubmit = async data => {
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input label='Почта: ' name='email' register={register} errors={errors} />
			<Input label='Пароль: ' name='password' register={register} errors={errors} />
			<button type='submit'>Log In</button>
		</form>
	);
}

export default Login;
