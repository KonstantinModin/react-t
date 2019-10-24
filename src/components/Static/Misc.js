import React from 'react';
import SocialCardData from './Social';
import Weather from './Weather';
import Events from './Events';
import EventsH from './Events/hooks';
import './Misc.css';

const Misc = () => {
    return (
        <div className="Misc">
            <h1>Misc</h1>                
            <div className="Grid">                
                <SocialCardData />                
                <div className="cont">
                    <div><h3>Fetching data emulation</h3></div>
                    <div className="twoComp">
                        <Events/>
                        <EventsH/>
                    </div>
                </div>               
                <Weather />
                <div className="Block4">
                    <span>4</span>
                </div>                
                {/* <div className="Block5">
                    <span>5</span>
                </div>                
                <div className="Block6">
                    <span>6</span>
                </div>                 */}
            </div>
        </div>
    )    
}

export default Misc;
