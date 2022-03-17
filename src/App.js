import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GuestMyPageMain from './components/guestMyPage/GuestMyPageMain';
import HostingStep1 from './components/hosting/HostingStep1';
import HostingStep2 from './components/hosting/HostingStep2';
import HostingStep3 from './components/hosting/HostingStep3';
import HostMyPageCheckIn from './components/hostMyPage/HostMyPageCheckIn';
import HostMyPageMain from './components/hostMyPage/HostMyPageMain';
import Main from './components/main/Main';
import ShelterListMain from './components/shelterList/ShelterListMain';


function App() {
    return (
          <BrowserRouter>
            <Routes>            
              <Route exact path ="/" element ={<Main />} />
              <Route path ="/hosting1" element={<HostingStep1 />} />
              <Route path ="/hosting2" element={<HostingStep2 />} />
              <Route path ="/hosting3" element={<HostingStep3 />} />
              <Route path ="/guest" element={<GuestMyPageMain />} />
              <Route path ="/host" element={<HostMyPageMain />} />
<<<<<<< HEAD
              <Route path='/shelterList' element={<ShelterListMain/>} />
              <Route path ="/hcheckIn" element={<HostCheckIncard />} />
              <Route path ="/hcheckout" element={<HostCheckOutCard />} />
=======
              <Route path='/shelterList' element={<ShelterList/>} />
              <Route path ="/hcheckIn" element={<HostMyPageCheckIn />} />
>>>>>>> 454f49300262f077b5eeb48673b2ea03bf148532
            </Routes>
          </BrowserRouter>
    );
}

export default App;
