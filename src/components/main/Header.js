import React,{useState, useRef} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


function Header() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [startDate , setStartDate] =useState(new Date());
    const [endDate , setEndDate] =useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [gender, setGender] = useState('');

    const onClick = () =>{
        setIsActive(!isActive);
    }


    const handleSelect=(ranges)=>{
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }

    const resetInput=()=>{
        setSearchInput("");
    }

    const selectionRange ={
        startDate : startDate,
        endDate: endDate,
        key : 'Selection'
    }

    const handleSearch=()=>{
        setSearchInput("");
        navigate('/homeList',{
            state:{
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests :noOfGuests,
                searchInput : searchInput
            }
        });
    }
    const handleGenderChange = (event) => {
      setGender(event.target.value);
  }


    return (
        <>
        <div className='header'>
            <img className='header__icon' src={logo} alt='logo' onClick={() => navigate('/')}/>
            <div className='header__center'>
                <input type="text"
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                placeholder={'Start your search'} />
                <SearchIcon style={{background : 'green', border : '1px solid gray ',borderRadius:'50px'}}/>
            </div>
            <div className='header__right'>
              <p>호스트 모드로 전환</p>
                  <LanguageIcon />
                  <div className="menu-container">
                    <button onClick={onClick} className="menu-trigger">
                        <ExpandMoreIcon />
                        <AccountCircleIcon />
                    </button>
                    <nav
                      ref={dropdownRef}
                      className={`menu ${isActive ? "active" : "inactive"}`}
                    >
                      <ul>
                        <li>
                          <Link to={'/'} > 로그인</Link>
                        </li>
                        <li>
                          <Link to={'/'}> 회원가입</Link>
                        </li>
                        <li>
                          <Link to={'/host'} > 호스트 마이페이지</Link>
                        </li>
                        <li>
                          <Link to={'/hosting1'} >숙소등록</Link>
                        </li>
                        <li>
                          <Link to={'/guest'} >게스트 마이페이지</Link>
                        </li>
                        <li>
                          <Link to={'/reservation/3'} >예약 테스트</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
            </div>
        </div>
        {searchInput &&(
            <div className='search'>
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["green"]}
                    onChange={handleSelect}
                />
                <div className='search_info'>
                  <div className='search_gender' >
                    <h2>Gender</h2>
                      <FormControl sx={{m: 1, minWidth: 100}}>
                        <InputLabel>남/녀</InputLabel>
                        <Select
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem value={'male'}>남성</MenuItem>
                            <MenuItem value={'female'}>여성</MenuItem>
                        </Select>
                      </FormControl>
                  </div>
                  <div className='search_guest'>
                      <h2>Number of Guest</h2>
                      <GroupIcon/>
                      <input
                      min={1}
                      type='number'
                      value={noOfGuests}
                      onChange={e => setNoOfGuests(e.target.value)}
                      />
                  </div>
                </div>
                <div className='search_bottom'>
                    <button onClick={resetInput} className='cancel_button'>Cancel</button>
                    <button onClick={handleSearch} className='search_button'>Search</button>
                </div>
            </div>
            )}
            </>
    );
}

export default Header;