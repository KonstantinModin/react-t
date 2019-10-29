import React from 'react';
import Shadow from './Shadow';
import LinkEffect from './LinkEffect';
import Scroll from './Scroll';
import Cities from './Cities';
import Calc from './Calc';
import Metronome from './Metronome';
// import Menu from './Menu';
import './Features.css';

const Features = () => {
    return (
        <div className="Features">
            <h1>Features</h1>                
            <div className="Grid">
                <Shadow />                                    
                <Cities />
                <LinkEffect />
                <Scroll />
                <Metronome />
                <Calc />               
            </div>
        </div>
    )    
}

export default Features;
