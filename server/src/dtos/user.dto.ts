import {IUserModel} from '@/types/models.types';
import {Types} from 'mongoose';

class UserDto {
	readonly email: string;
	readonly id: Types.ObjectId;

	constructor(model: IUserModel) {
		this.email = model.email;
		this.id = model._id;
	}
}

export default UserDto;
