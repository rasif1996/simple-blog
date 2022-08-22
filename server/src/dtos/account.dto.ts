import {IUserModel} from '@/types/models.types';

class AccountDto {
	readonly name: string;
	readonly surname: string;
	readonly age: number;
	readonly image: string;

	constructor(model: IUserModel) {
		this.name = model.name;
		this.surname = model.surname;
		this.age = model.age;
		this.image = model.image;
	}
}

export default AccountDto;
