import {TokensType} from '.';
import {UserType} from '.';

export type RegistrationResponseType = {
	email: string;
	id: string;
};

export type LoginResponseType = {
	tokens: TokensType;
	user: UserType;
};

export type StatusResponseType = {
	status: number;
};
