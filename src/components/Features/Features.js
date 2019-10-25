import React, { useState, useEffect } from 'react';
import Shadow from './Shadow';
import LinkEffect from './LinkEffect';
import Scroll from './Scroll';
import Cities from './Cities';
import Metronome from './Metronome';
// import Menu from './Menu';
import './Features.css';

const Features = () => {
    const [ angel, setAngel ] = useState(0);
    
    useEffect(()=>{
        const timerId = setInterval(()=> setAngel((Math.random()*360)|0), 500);
        return () => clearInterval(timerId);
    },[]);

    return (
        <div className="Features">
            <h1>Features</h1>                
            <div className="Grid">
                <Shadow />                                    
                <Cities />
                <LinkEffect />
                <Scroll />
                <Metronome />
                <div className="six"><span style={{transform:`rotateZ(${angel}deg)`}}>6</span></div>               
            </div>
        </div>
    )    
}

export default Features;
