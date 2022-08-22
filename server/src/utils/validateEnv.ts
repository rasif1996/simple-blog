import {cleanEnv, port, str} from 'envalid';

function validateEnv() {
	cleanEnv(process.env, {
		SECRET_ACCESS_TOKEN: str({default: 'Secret access token'}),
		SECRET_REFRESH_TOKEN: str({default: 'Secret refresh token'}),
		DB_NAME: str(),
		DB_URL: str(),
		CLIENT_URL: str(),
		SERVER_URL: str(),
		PORT: port()
	});
}

export default validateEnv;
