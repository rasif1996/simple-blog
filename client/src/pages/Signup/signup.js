import {useState} from 'react';
import {useDispatch} from 'react-redux';

import styles from './signup.module.scss';

function Signup() {
	const [errors, setErrors] = useState();
	const [values, setValues] = useState({email: '', password: '', passwordConfirmation: ''});

	const {
		auth: {registration}
	} = useDispatch();

	const handleSubmit = async e => {
		e.preventDefault();

		const errors = await registration(values);

		setErrors(errors);
	};

	const handleChange = e => {
		setValues({...values, [e.target.name]: e.target.value});
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='text'
				name='email'
				value={values.email}
				placeholder='Email'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				name='password'
				value={values.password}
				placeholder='Password'
				onChange={handleChange}
			/>
			<input
				className={styles.input}
				type='text'
				name='passwordConfirmation'
				value={values.passwordConfirmation}
				placeholder='Confirm password'
				onChange={handleChange}
			/>
			{errors &&
				errors.map(error => {
					return <p key={error.param}>{error.msg}</p>;
				})}
			<button type='submit'>Sign Up</button>
		</form>
	);
}

export default Signup;
