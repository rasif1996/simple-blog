import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import '../styles/index.scss';

import store from '../client';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
