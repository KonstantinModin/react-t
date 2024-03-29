import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Clock.css';

const Clock = React.forwardRef((props, ref) => {    
    const [ time, setTime ] = useState(new Date().toString());
    const [ secClass, setSecClass ] = useState('');    

    const sec = useRef();
    const min = useRef();
    const hrs = useRef();
    
    useEffect(() => {              
        const timeTicking = () => {         
            
            const currentTime = new Date();
        
            const s = currentTime.getSeconds();
            s === 0 ? setSecClass('') : setSecClass('transition');
            const sPerCent = s / 60;
        
            const m = currentTime.getMinutes();
            const mPerCent = m / 60;
        
            const h = currentTime.getHours();
            const hPerCent = h / 12;
        
            sec.current.style.transform = `rotate(${sPerCent * 360 + 90}deg)`;
            min.current.style.transform = `rotate(${mPerCent * 360 + sPerCent * 6 + 90}deg)`;
            hrs.current.style.transform = `rotate(${hPerCent * 360 + mPerCent * 30 + 90}deg)`;

            setTime(new Date().toString());            
        }
        timeTicking(); //initial calculation

        const timeInterval = setInterval(timeTicking, 500);        

        return () => {
            clearInterval(timeInterval);            
        }
        
    }, []);

    // const spinner = <div className="spinner"><div></div><div></div></div>;    
    
    return (
        <div className="ClockComponent">
            <h1>Clock</h1>
            <div className="Clock">                
                <div className="hands">
                    <div ref={sec} id="secHand" className={secClass}></div>
                    <div ref={min} id="minHand"></div>
                    <div ref={hrs} id="hrsHand"></div>
                </div>
            </div>
            <h4>Current Time is: </h4><h3>{time}</h3>
            <div className="description">
                <h2>Context</h2>
                <div>
                    Type here some text then App.js will get it from ref provided with React.forawardRef
                    and then this text will be provided as a Context to entire App. 
                    You will be able to see it in <Link to="/test">Test section </Link> 
                    of this site.
                </div>                
                <input ref={ref} onChange={props.onInputClick} defaultValue={props.defaultValue}/>                
            </div>                       
        </div>
    )
});

export default Clock;
