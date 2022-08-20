import UserModel from '@/models/UserModel';
import ApiError from '@/exceptions/ApiError';
import AccountDto from '@/dtos/accountDto';
import IUser from '@/types/IUser';
import IUserService from '@/types/IUserService';

class UserService implements IUserService {
	async getUsers(): Promise<IUser[]> {
		const users = await UserModel.find({});

		return users;
	}

	async updateUser(id: string, data: any): Promise<AccountDto> {
		let user = await UserModel.findById(id);

		if (!user) {
			throw ApiError.BadRequest('Пользователь не найден');
		}

		user = Object.assign(user, data);

		const newUser = await user.save();

		const info = new AccountDto(newUser);

		return info;
	}
}

export default new UserService();
