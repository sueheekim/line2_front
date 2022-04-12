import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GuestMyPageMain from './components/guestMyPage/GuestMyPageMain';
import HomeList from './components/homeList/HomeList';
import HostingStep1 from './components/hosting/HostingStep1';
import HostingStep2 from './components/hosting/HostingStep2';
import HostingStep3 from './components/hosting/HostingStep3';
import HostMyPageMain from './components/hostMyPage/HostMyPageMain';
import Header from './components/main/Header';
import Main from './components/main/Main';
import HomeReservation from "./components/reservation/HomeReservation";
import EditHome from "./components/hostMyPage/home/EditHome";
import GuestSignUp from './components/signup/GuestSignUp';
import HostSignUp from './components/signup/HostSignUp';
import Test from './components/test';
import LoginPage from './components/signin/LoginPage';


function App() {
	const [test, setTest] = useState({});
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route path="/hosting1" element={<HostingStep1 test={test} setTest={setTest} />} />
				<Route path="/hosting2" element={<HostingStep2 test={test} setTest={setTest} />} />
				<Route path="/hosting3" element={<HostingStep3 test={test} setTest={setTest} />} />
				<Route path="/guest" element={<GuestMyPageMain />} />
				<Route path="/host" element={<HostMyPageMain />} />
				<Route path="/homeList" element={<HomeList />} />
				<Route path="/homeList/:location" element={<HomeList />} />
				<Route path='/home_reservation/:id' element={<HomeReservation />} />
				<Route path="/host/edit_home/:id" element={<EditHome />} />
				<Route path="/guest/signup" element={<GuestSignUp />} />
				<Route path="/host/signup" element={<HostSignUp />} />
				<Route path='/login' element={<LoginPage/>} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
