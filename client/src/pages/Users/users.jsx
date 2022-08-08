import {useDispatch, useSelector, useStore} from 'react-redux';

import styles from './users.module.scss';

function Users() {
	const {
		select: {user}
	} = useStore();

	const {
		user: {fetchUsers}
	} = useDispatch();

	const users = useSelector(user.getUsers);

	const handleGetUsers = async () => {
		await fetchUsers();
	};

	return (
		<>
			<button onClick={handleGetUsers}>Get users</button>
			<div>
				{users.map(item => (
					<p key={item._id}>{item.email}</p>
				))}
			</div>
		</>
	);
}

export default Users;
