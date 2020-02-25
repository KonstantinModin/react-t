import React, { useState, useRef, useEffect } from 'react';
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

    const mouseEnterHandler = ({ nativeEvent }) => {
        if (ref.current && scroll.current) {
            console.log('scrollTop', scroll.current.scrollTop);
            console.log(ref.current.getBoundingClientRect());
            
            const { clientX, clientY } = nativeEvent;

            const { top, left } = ref.current.getBoundingClientRect();

            setXY([ (left)|0, (top - 40 + scroll.current.scrollTop )|0 ]);
            // setXY([ clientX - 40, clientY - 40 ]);
        }
    }

    useEffect(()=>{
        console.log(x,y);
    }, [x,y]);

    return (
        <div ref={ref} className="Day" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <div><label>{caption}</label></div>
            <div><img src={picture[type]} alt="weather"></img></div>
            <div><label className="text-danger">{high}⁰</label> <label className="text-info">{low}⁰</label></div>
            {x && <div style={{top:y+'px',left:x+'px'}} className="date"><label>{date}</label></div>}
        </div>
    )
}

export default Day;
