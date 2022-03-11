import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function HostingLocation() {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
      setCity(event.target.value);
    };

    return (  
        <div className='hostinglocation'>
            <h2> 숙소 위치 입력</h2>
            <h4> 지역</h4>
            <FormControl sx={{ m: 3, minWidth: 500 }}>
                <InputLabel >city</InputLabel>
                <Select
                    value={city}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>부산</MenuItem>
                    <MenuItem value={2}>서울</MenuItem>
                    <MenuItem value={3}>대전</MenuItem>
                    <MenuItem value={4}>대구</MenuItem>
                    <MenuItem value={5}>강원</MenuItem>
                    <MenuItem value={6}>전남</MenuItem>
                    <MenuItem value={7}>제주</MenuItem>
                </Select>
            </FormControl>
            
        </div>
        
    );
}

export default HostingLocation;