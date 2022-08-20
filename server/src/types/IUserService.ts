import AccountDto from '@/dtos/accountDto';
import IUser from './IUser';

interface IUserService {
	getUsers(): Promise<IUser[]>;
	updateUser(id: string, data: any): Promise<AccountDto>;
}

export default IUserService;
