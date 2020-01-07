import React, { useState, useEffect } from 'react';
import './Cube.css';

const Cube = () => {    
    
    const selectSide = ( s = 'default') => {
        const arr = ['front','right','back','left','top','bottom'];
        const rand = arr[(Math.random() * 6)|0];        
        return rand !== s ? rand : selectSide(s);
    }
    
    const [ side, setSide ] = useState(selectSide());

    useEffect(()=>{        
        const timerId = setTimeout(()=> setSide(selectSide(side)), 1000 + (200 * Math.random())|0);
        return () => clearInterval(timerId);
    // eslint-disable-next-line    
    }, [ side ]);


    return (
        <div className="scene">
            <div className={`cube ${'show-'+side}`}>
                <div className="cube__face cube__face--front">front</div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">right</div>
                <div className="cube__face cube__face--left">left</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom</div>
            </div>
        </div>
    )
}

export default Cube;
