import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import AuthProvider from './AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';

import './styles/index.scss';

import store from '../client';

function App() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<AuthProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</AuthProvider>
			</ErrorBoundary>
		</Provider>
	);
}

export default App;
