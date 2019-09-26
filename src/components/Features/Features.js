import React from 'react';
import Shadow from './Shadow';
import LinkEffect from './LinkEffect';
import Scroll from './Scroll';
import Cities from './Cities';
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
                <div className="Block5">
                    <span className="innerDiv">5</span>
                </div>
                <div className="Block6">
                    <span className="innerDiv">6</span>
                </div>                
            </div>
        </div>
    )    
}

export default Features;
