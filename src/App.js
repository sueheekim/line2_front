import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import GuestMyPageMain from './components/guestMyPage/GuestMyPageMain';
import HostingStep1 from './components/hosting/HostingStep1';
import HostingStep2 from './components/hosting/HostingStep2';
import HostingStep3 from './components/hosting/HostingStep3';
import HostMyPageMain from './components/hostMyPage/HostMyPageMain';
import Main from './components/main/Main';
import ShelterListMain from './components/shelterList/ShelterListMain';
import Reservation from "./components/reservation/Reservation";


function App() {
    const [test, setTest] = useState({});
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/hosting1" element={<HostingStep1 test={test} setTest={setTest}/>}/>
                <Route path="/hosting2" element={<HostingStep2 test={test} setTest={setTest}/>}/>
                <Route path="/hosting3" element={<HostingStep3 test={test} setTest={setTest}/>}/>
                <Route path="/guest" element={<GuestMyPageMain/>}/>
                <Route path="/host" element={<HostMyPageMain/>}/>
                <Route path='/shelterList' element={<ShelterListMain/>}/>
                <Route path='/reservation/:id' element={<Reservation/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
