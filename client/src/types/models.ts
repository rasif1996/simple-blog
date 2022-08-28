export interface IUser {
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

export interface IInfo {
	name?: string;
	surname?: string;
	age?: number;
	image?: string;
}

export interface IPost {
	id: string;
	title: string;
	text: string;
}
