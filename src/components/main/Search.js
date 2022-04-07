import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ko } from 'date-fns/esm/locale';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [dateActive, setDateActive] = useState(false);
    const [guestActive, setGuestActive] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [gender, setGender] = useState('');

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
        navigate(`/homeList/${location}`);
    };

    return (
        <div>
            <div className="empty">
                <div className="top-navigation">
                    <nav>
                        <form className="searchbar">
                            <div className="search-inputs">
                                <label for="location">
                                    <div className="label">Location</div>
                                    <input
                                        name="location"
                                        id="location"
                                        value={location}
                                        placeholder={
                                            location || '원하는 쉼터 지역'
                                        }
                                        onChange={({ target: { value } }) =>
                                            setLocation(value)
                                        }
                                    />
                                </label>
                            </div>
                            |
                            <div className="search-inputs" onClick={handleDate}>
                                <label for="check-in">
                                    <div className="label">체크인</div>
                                    <input
                                        name="check-in"
                                        id="check-in"
                                        placeholder={
                                            formattedStartDate || 'Add dates'
                                        }
                                    />
                                </label>
                            </div>
                            |
                            <div className="search-inputs">
                                <label for="check-out">
                                    <div className="label">체크아웃</div>
                                    <input
                                        name="check-out"
                                        id="check-out"
                                        placeholder={
                                            formattedEndDate || 'Add dates'
                                        }
                                    />
                                </label>
                            </div>
                            |
                            <div
                                className="search-inputs"
                                onClick={handleGuest}
                            >
                                <label for="guests">
                                    <div className="label">인원</div>
                                    <input
                                        name="guests"
                                        id="guests"
                                        placeholder={gender || '게스트 1명'}
                                    />
                                </label>
                            </div>
                            <div
                                className="search-button"
                                onClick={toggleSearch}
                            >
                                <SearchIcon
                                    style={{
                                        background: 'green',
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
                                months={2}
                                direction="horizontal"
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['green']}
                                onChange={handleSelect}
                            />
                        </div>
                    )}
                </div>
                <div>
                    {guestActive && (
                        <div className="search_info">
                            <div className="search_gender">
                                <h5>성별</h5>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <InputLabel>남/녀</InputLabel>
                                    <Select
                                        value={gender}
                                        onChange={handleGenderChange}
                                    >
                                        <MenuItem value={'male'}>남성</MenuItem>
                                        <MenuItem value={'female'}>
                                            여성
                                        </MenuItem>
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
