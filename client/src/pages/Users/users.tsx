import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useAppStore from '../../hooks/useAppStore';

function Users() {
	const {
		select: {user}
	} = useAppStore();

	const {
		user: {fetchUsers}
	} = useAppDispatch();

	const users = useAppSelector(user.getUsers);

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
