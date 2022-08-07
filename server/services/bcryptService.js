const bcrypt = require('bcrypt');

class BcryptService {
	encrypt(password) {
		return bcrypt.hashSync(password, 3);
	}

	compare(password, encryptedPassword) {
		return bcrypt.compareSync(password, encryptedPassword);
	}
}

module.exports = new BcryptService();
