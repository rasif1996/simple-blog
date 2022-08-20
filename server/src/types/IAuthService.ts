import UserDto from '@/dtos/userDto';
import {DeleteResult} from 'mongodb';

interface IAuthService {
	registration(email: string, password: string): Promise<UserDto>;
	login(email: string, password: string): Promise<any>;
	logout(refreshToken: string): Promise<DeleteResult>;
	refresh(refreshToken: string): Promise<any>;
	activate(activationLink: string): Promise<UserDto>;
}

export default IAuthService;
