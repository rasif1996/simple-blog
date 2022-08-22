import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './utils/validateEnv';
import App from './App';

validateEnv();

const app = new App();

app.listen();
