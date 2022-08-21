import IInfo from './IInfo';
import IUser from './IUser';

interface IUserService {
	getUsers(): Promise<IUser[]>;
	updateUser(info: FormData): Promise<IInfo>;
}

export default IUserService;
