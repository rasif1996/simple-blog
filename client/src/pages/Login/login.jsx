import {useState} from 'react';
import {useDispatch} from 'react-redux';

import styles from './login.module.scss';

function Login() {
	const [values, setValues] = useState({email: '', password: ''});

	const {
		auth: {login}
	} = useDispatch();

	const handleSubmit = async e => {
		e.preventDefault();

		await login(values);
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
			<button type='submit'>Log In</button>
		</form>
	);
}

export default Login;
