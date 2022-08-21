import IUser from '@/types/IUser';
import {Types} from 'mongoose';

class RegistrationDto {
	readonly email: string;
	readonly id: Types.ObjectId;

	constructor(model: IUser) {
		this.email = model.email;
		this.id = model._id;
	}
}

export default RegistrationDto;
