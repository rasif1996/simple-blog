import AccountDto from '@/dtos/account.dto';
import UserDto from '@/dtos/user.dto';

export type StartAppType = () => void;

export type TokensType = {
	accessToken: string;
	refreshToken: string;
};

export type AccountDtoType = {
	info: AccountDto;
};

export type UserType = AccountDtoType & UserDto;

export type LoginResponseType = {
	tokens: TokensType;
	user: UserType;
};
