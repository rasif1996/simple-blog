import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import AuthProvider from './AuthProvider';

import './styles/index.scss';

import store from '../client';

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	);
}

export default App;
