import bcrypt from 'bcrypt';
import IBcryptService from '@/types/IBcryptService';

class BcryptService implements IBcryptService {
	encrypt(password: string): string {
		return bcrypt.hashSync(password, 3);
	}

	compare(password: string, encryptedPassword: string): boolean {
		return bcrypt.compareSync(password, encryptedPassword);
	}
}

export default new BcryptService();
