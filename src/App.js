import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GuestMyPageMain from './components/guestMyPage/GuestMyPageMain';
import HostingStep1 from './components/hosting/HostingStep1';
import HostingStep2 from './components/hosting/HostingStep2';
import HostCheckIncard from './components/hostMyPage/HostCheckInCard';
import HostMyPageMain from './components/hostMyPage/HostMyPageMain';
import Main from './components/main/Main';

function App() {
    return (
          <BrowserRouter>
            <Routes>            
              <Route exact path ="/" element ={<Main />} />
              <Route path ="/hosting1" element={<HostingStep1 />} />
              <Route path ="/hosting2" element={<HostingStep2 />} />
              <Route path ="/guest" element={<GuestMyPageMain />} />
              <Route path ="/host" element={<HostMyPageMain />} />
              <Route path ="/hcheckIn" element={<HostCheckIncard />} />
            </Routes>

          </BrowserRouter>
    );
}

export default App;
