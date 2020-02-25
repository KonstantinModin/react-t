import React, { useState, useRef } from 'react';
import rain from './rain.png';
import clouds from './clouds.png';
import sun from './sun.png';
import './Weather.css';

const picture = {
    rain: rain,
    clouds: clouds,
    sun: sun
};

const Day = ({ date, caption, low, high, type, scroll }) => {
    
    const ref = useRef();

    const [ [x,y], setXY ] = useState([]);
    
    const mouseLeaveHandler = () => setXY([]);        

    const mouseEnterHandler = () => {
        if (ref.current && scroll.current) {                  
            
            const { top, left } = ref.current.getBoundingClientRect();
            
            setXY([ left | 0, (top - 40 + scroll.current.scrollTop ) | 0 ]);

            // setXY([ clientX - 40, clientY - 40 ]); //another implementation
            // const { clientX, clientY } = nativeEvent;
        }
    }   

    return (
        <div ref={ref} className="Day" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <div><label>{caption}</label></div>
            <div><img src={picture[type]} alt="weather"></img></div>
            <div><label className="text-danger">{high}⁰</label> <label className="text-info">{low}⁰</label></div>
            {!isNaN(x) && <div style={{top:y+'px',left:x+'px'}} className="date"><label>{date}</label></div>}
        </div>
    )
}

export default Day;
