import {useRoutes} from 'react-router-dom';
import allRoutes from './routes';

function Router() {
	return useRoutes(allRoutes);
}

export default Router;
