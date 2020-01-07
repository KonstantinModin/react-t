import React from 'react';
import SocialCardData from './Social';
import Weather from './Weather';
import FetchApp from './Fetch';
import Vars from './Variables';
import './Misc.css';

const Misc = () => {
    return (
        <div className="Misc">
            <h1>Miscellaneous</h1>                
            <div className="Grid">                
                <SocialCardData />                
                <FetchApp />   
                <Weather />
                <Vars />                
            </div>
        </div>
    )    
}

export default Misc;
