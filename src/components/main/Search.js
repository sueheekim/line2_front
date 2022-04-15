import React, { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios';

function Search() {
    const searchUrl = "/home/v1/home/find";
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [dateActive, setDateActive] = useState(false);
    const [guestActive, setGuestActive] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [gender, setGender] = useState('');
    const [searchHome, setSearchHome] = useState([]);

    const formattedStartDate = format(new Date(startDate), 'yy-MM-dd');
    const formattedEndDate = format(new Date(endDate), 'yy-MM-dd');

    const handleDate = () => {
        setDateActive(!dateActive);
    };

    const handleGuest = () => {
        setGuestActive(!guestActive);
    };

    const handleSelect = ranges => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    };
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection',
    };

    const handleGenderChange = event => {
        setGender(event.target.value);
    };

    const toggleSearch = () => {
        if(startDate === ''){
            axios.post(searchUrl, {
                homeAddress : location,
                checkIn : new Date()
            }).then(res =>{
                console.log(res)
                setSearchHome(res.data);
                console.log(searchHome)
                navigate(`/homeList/` ,{state: res.data})
            })
        } else {
            axios.post(searchUrl, {
                homeAddress : location,
                checkIn : startDate
            }).then(res =>{
                console.log(res)
                setSearchHome(res.data);
                console.log(searchHome)
                navigate(`/homeList/` ,{state: res.data})
            })
        }
    };

    return (
        <div>
            <div className="empty">
                <div className="top-navigation">
                    <nav>
                        <form className="searchbar">
                            <div className="search-inputs">
                                <label for="location">
                                    <div className="label">위치</div>
                                    <input
                                        name="location"
                                        id="location"
                                        value={location}
                                        placeholder={location || '원하는 쉼터 지역'}
                                        onChange={({ target: { value } }) => setLocation(value)}
                                    />
                                </label>
                            </div>
                            |
                            <div className="search-inputs" onClick={handleDate}>
                                <label for="check-in">
                                    <div className="label">입소 희망일</div>
                                    <input
                                        name="check-in"
                                        id="check-in"
                                        placeholder={formattedStartDate}
                                    />
                                </label>
                            </div>
                            |
                            <div className="search-inputs" onClick={handleGuest}>
                                <label for="guests">
                                    <div className="label">성별</div>
                                    <input name="guests" id="guests" placeholder={gender || '남/여'} />
                                </label>
                            </div>
                            <div className="search-button" onClick={toggleSearch}>
                                <SearchIcon
                                    style={{
                                        background: '#125b30',
                                        border: '1px solid gray ',
                                        borderRadius: '50px',
                                        color: 'white',
                                        fontSize: '30px',
                                    }}
                                />
                            </div>
                        </form>
                    </nav>
                </div>
                <div>
                    {dateActive && (
                        <div className="datepicker">
                            <DateRangePicker
                                locale={ko}
                                months={1}
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['#125b30']}
                                onChange={handleSelect}
                                staticRanges={[]}
                                inputRanges={[]}
                            />
                        </div>
                    )}
                </div>
                <div>
                    {guestActive && (
                        <div className="search_info">
                            <div className="search_gender">

                                <FormControl sx={{ m: 1, minWidth: 100 }}>
                                    <InputLabel >남/녀</InputLabel>
                                    <Select value={gender} onChange={handleGenderChange}>
                                        <MenuItem value={'male'}>남성</MenuItem>
                                        <MenuItem value={'female'}>여성</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
