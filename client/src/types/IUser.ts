interface IUser {
	_id: string;
	email: string;
	password: string;
	isActivated: boolean;
	activationLink: string;
	name?: string;
	surname?: string;
	age?: number;
	image?: string;
}

export default IUser;
