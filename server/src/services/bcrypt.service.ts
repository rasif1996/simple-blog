import bcrypt from 'bcrypt';
import IBcryptService from '@/types/IBcryptService';

const saltRounds = 3;

class BcryptService implements IBcryptService {
	encrypt(password: string): string {
		return bcrypt.hashSync(password, saltRounds);
	}

	compare(password: string, encryptedPassword: string): boolean {
		return bcrypt.compareSync(password, encryptedPassword);
	}
}

export default new BcryptService();
