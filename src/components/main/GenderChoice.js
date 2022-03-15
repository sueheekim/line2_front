

import { Button } from '@mui/material';
import React from 'react';
import './GenderChoice.css';

function GenderChoice() {
    return (  
        <div className='genderchoice'>
            <Button variant='contained' style={{marginRight :'5px'}}>남성</Button>
            <Button variant='contained' >여성</Button>
        </div>
    );
}

export default GenderChoice;