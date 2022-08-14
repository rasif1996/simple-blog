class AccountDto {
	name;
	surname;
	age;
	image;

	constructor(model) {
		this.name = model.name;
		this.surname = model.surname;
		this.age = model.age;
		this.image = model.image;
	}
}

module.exports = AccountDto;
