import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/categories/categories';
import AboutUs from './pages/aboutUs/aboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './pages/profile/profile';

const query = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={query}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
				<Footer />
				<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			</QueryClientProvider>
		</>
	);
}

export default App;
