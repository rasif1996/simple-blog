interface IBcryptService {
	encrypt(password: string): string;
	compare(password: string, encryptedPassword: string): boolean;
}

export default IBcryptService;
