import useForm from '../../hooks/useHookForm';
import {useDispatch} from 'react-redux';
import Input from '../../common/ui/Input/input';

import styles from './signup.module.scss';

function Signup() {
	const {
		auth: {registration}
	} = useDispatch();

	const {
		register,
		handleSubmit,
		formState: {errors, isSubmitting}
	} = useForm({validate: 'registration'});

	return (
		<form className={styles.form} onSubmit={handleSubmit(registration)}>
			<Input label='Почта:' name='email' register={register} errors={errors} />
			<Input label='Пароль:' name='password' register={register} errors={errors} />
			<Input label='Пароль:' name='passwordConfirmation' register={register} errors={errors} />
			{/* {errors && errors.submission && <p>{errors.submission.message}</p>} */}
			<button type='submit' disabled={isSubmitting}>
				Sign Up
			</button>
		</form>
	);
}

export default Signup;
