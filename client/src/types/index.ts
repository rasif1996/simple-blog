import {IUser, IInfo} from './models';

export interface IMenuItem {
	label: string;
	to: string;
	authRequired?: boolean;
	children?: IMenuItem[];
}

export type TokensType = {
	accessToken: string;
	refreshToken: string;
};

export type InfoType = {
	info: IInfo;
};

export type UserType = InfoType & IUser;
