import IInfo from './IInfo';
import IUser from './IUser';

export interface IMenuItem {
	label: string;
	to: string;
	authRequired?: boolean;
}

export interface IRegistrationData {
	email: string;
	password: string;
	passwordConfirmation: string;
	submission?: string;
}

export interface ILoginData {
	email: string;
	password: string;
	submission?: string;
}

export interface IAccountData {
	image: File;
	name: string;
	surname: string;
	age: number;
}

export interface ITaskData {
	task: string;
}

export interface IRegistrationResponse {
	email: string;
	id: string;
}

export type TokensType = {
	accessToken: string;
	refreshToken: string;
};

export type IInfoType = {
	info: IInfo;
};

export type UserType = IInfoType & IUser;

export interface ILoginResponse {
	tokens: TokensType;
	user: UserType;
}

export interface IStatusResponse {
	status: number;
}

export interface IUpdateTask {
	id: string;
	data: object;
}
