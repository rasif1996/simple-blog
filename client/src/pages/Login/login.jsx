import Input from 'common/ui/Input/input';
import useForm from 'hooks/useHookForm';
import {useDispatch} from 'react-redux';

import styles from './login.module.scss';

function Login() {
	const {
		auth: {login}
	} = useDispatch();

	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({validate: 'login'});

	return (
		<form className={styles.form} onSubmit={handleSubmit(login)}>
			<Input label='Почта: ' name='email' register={register} errors={errors} />
			<Input label='Пароль: ' name='password' register={register} errors={errors} />
			{errors && errors.submission && <p>{errors.submission.message}</p>}
			<button type='submit'>Log In</button>
		</form>
	);
}

export default Login;
