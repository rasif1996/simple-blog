import styles from './account.module.scss';
import useHookForm from 'hooks/useHookForm';
import Input from 'common/ui/Input';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {useState} from 'react';

function Account() {
	const {
		select: {user}
	} = useStore();

	const {
		user: {updateUser}
	} = useDispatch();

	const info = useSelector(user.getInfo);

	const [avatarSrc, setAvatarSrc] = useState(info.image || '/images/avatar.png');

	console.log(info);

	const {handleSubmit, register} = useHookForm({defaultValues: info});

	const handleChange = e => {
		const files = e.currentTarget.files;

		if (!files || !files.length) {
			return;
		}

		const image = files[0];

		const url = URL.createObjectURL(image);

		setAvatarSrc(url);

		setTimeout(() => {
			URL.revokeObjectURL(url);
		}, 100);
	};

	return (
		<>
			<p className={styles.title}>Ваши данные: </p>
			<img className={styles.image} src={avatarSrc} alt='Avatar' />
			<form onSubmit={handleSubmit(updateUser)}>
				<Input
					label='Фотография'
					type='file'
					name='image'
					accept='image/*'
					register={register}
					onChange={handleChange}
				/>
				<Input label='Имя' name='name' register={register} />
				<Input label='Фамилия' name='surname' register={register} />
				<Input label='Возраст' type='number' name='age' register={register} />
				<button>Save</button>
			</form>
		</>
	);
}

export default Account;
