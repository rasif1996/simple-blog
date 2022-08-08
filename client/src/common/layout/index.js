import {Outlet} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Main from './main';

function Layout() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}

export default Layout;
