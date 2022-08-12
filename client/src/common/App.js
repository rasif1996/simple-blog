import {Provider} from 'react-redux';
import Router from './Router';
import AuthProvider from './AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import history from './history';
import store from '../client';

import './styles/index.scss';

function App() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<AuthProvider>
					<HistoryRouter history={history}>
						<Router />
					</HistoryRouter>
				</AuthProvider>
			</ErrorBoundary>
		</Provider>
	);
}

export default App;
