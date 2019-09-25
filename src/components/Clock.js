import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {    
    const [ time, setTime ] = useState(new Date().toString());     
    
    useEffect(() => {
        const timeTicking = () => {            
            const sec = document.querySelector('#secHand');
            const min = document.querySelector('#minHand');
            const hrs = document.querySelector('#hrsHand');
            
            const currentTime = new Date();
        
            const s = currentTime.getSeconds();
            s === 0 ? sec.classList.remove('transition') : sec.classList.add('transition');
            const sPerCent = s / 60;
        
            const m = currentTime.getMinutes();
            const mPerCent = m / 60;
        
            const h = currentTime.getHours();
            const hPerCent = h / 12;
        
            sec.style.transform = `rotate(${sPerCent * 360 + 90}deg)`;
            min.style.transform = `rotate(${mPerCent * 360 + sPerCent * 6 + 90}deg)`;
            hrs.style.transform = `rotate(${hPerCent * 360 + mPerCent * 30 + 90}deg)`;

            setTime(new Date().toString());            
        } 

        const timeInterval = setInterval(timeTicking, 1000);        

        return () => {
            clearInterval(timeInterval);            
        }
    }, []);
    
    return (
        <div className="ClockComponent">
            <h1>Clock</h1>
            <div className="Clock">
                <div className="hands">
                    <div id="secHand"></div>
                    <div id="minHand"></div>
                    <div id="hrsHand"></div>
                </div>
            </div>
            <h4>Current Time is: </h4><h3>{time}</h3>
        </div>
    )
}

export default Clock;
