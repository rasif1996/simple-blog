import styles from './account.module.scss';
import useHookForm from 'hooks/useHookForm';
import Input from 'common/ui/Input';
import {useDispatch, useSelector, useStore} from 'react-redux';

function Account() {
	const {
		select: {user}
	} = useStore();

	const {
		user: {updateUser}
	} = useDispatch();

	const info = useSelector(user.getInfo);

	const {handleSubmit, register} = useHookForm({defaultValues: info});

	return (
		<>
			<p className={styles.title}>Ваши данные: </p>
			<form onSubmit={handleSubmit(updateUser)}>
				<Input label='Имя' name='name' register={register} />
				<Input label='Фамилия' name='surname' register={register} />
				<Input label='Возраст' type='number' name='age' register={register} />
				<button>Save</button>
			</form>
		</>
	);
}

export default Account;
