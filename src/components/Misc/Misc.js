import React, { useRef, useEffect, useState } from 'react';
import SocialCardData from './Social';
import Weather from './Weather';
import FetchApp from './Fetch';
import Vars from './Variables';
import './Misc.css';

const Misc = () => {
    const miscRef = useRef();

    const [ scroll, setScroll ] = useState(0);

    useEffect(()=>{
        if (miscRef.current) {
            console.log(miscRef.current.scrollTop);
            setScroll(miscRef.current.scrollTop);
        }
    },[miscRef.current.scrollTop]);

    return (
        <div ref={miscRef} className="Misc">
            <h1>Miscellaneous</h1>                
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
