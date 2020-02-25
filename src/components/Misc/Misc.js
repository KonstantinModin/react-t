import React from 'react';
import SocialCardData from './Social';
import Weather from './Weather';
import FetchApp from './Fetch';
import Vars from './Variables';
import './Misc.css';

const Misc = ({ scroll }) => {
    return (
        <div className="Misc">
            <div className="title">
                <h1>Miscellaneous</h1>
            </div>                  
            <div className="Grid">                
                <SocialCardData />                
                <FetchApp />   
                <Weather scroll={scroll} />
                <Vars />                
            </div>
        </div>
    )    
}

export default Misc;