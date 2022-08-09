import {useState} from 'react';
import {useDispatch} from 'react-redux';

import styles from './login.module.scss';

function Login() {
	const [errors, setErrors] = useState();
	const [values, setValues] = useState({email: '', password: ''});

	const {
		auth: {login}
	} = useDispatch();

	const handleSubmit = async e => {
		e.preventDefault();

		const errors = await login(values);

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
			{errors &&
				errors.map(error => {
					return <p key={error.param}>{error.msg}</p>;
				})}
			<button type='submit'>Log In</button>
		</form>
	);
}

export default Login;
