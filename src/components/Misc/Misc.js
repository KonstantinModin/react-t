import React from 'react';
import SocialCardData from './Social';
import Weather from './Weather';
import Cube from './Cube';
import Fetch from './Fetch';
import FetchH from './Fetch/hooks';
import './Misc.css';

const Misc = () => {
    return (
        <div className="Misc">
            <h1>Miscellaneous</h1>                
            <div className="Grid">                
                <SocialCardData />                
                <div className="cont">
                    <div><h3>Fetching data emulation</h3></div>
                    <div className="twoComp">
                        <Fetch/>
                        <FetchH/>
                    </div>
                </div>               
                <Weather />
                <div className="four">
                    <Cube/>
                    <Cube/>
                    <Cube/>
                    <Cube/>
                </div>
            </div>
        </div>
    )    
}

export default Misc;
