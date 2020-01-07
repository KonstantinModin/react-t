import React from 'react';
import Fetch from './Fetch';
import FetchH from './hooks';
import './FetchApp.css';

const FetchApp = () => {
    return (
        <div className="cont">
            <div><h3>Fetching data emulation</h3></div>
            <div className="twoComp">
                <Fetch/>
                <FetchH/>
            </div>
        </div>            
    )
}

export default FetchApp;
