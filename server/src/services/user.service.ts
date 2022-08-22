import UserModel from '@/models/user.model';
import ApiError from '@/exceptions/ApiError';
import AccountDto from '@/dtos/account.dto';
import {IUserModel} from '@/types/models.types';
import {IUserService} from '@/types/services.types';

class UserService implements IUserService {
	async getUsers(): Promise<IUserModel[]> {
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
