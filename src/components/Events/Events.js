import React, { useState, createRef, useEffect } from 'react';
import './Events.css';

const Events = () => {
    const [ targ, setTarg ] = useState(null);
    const [ offset, setOffset ] = useState(null);
    const outerDiv = createRef();    

    function eventHandler(e) {    
        e.persist();
        console.log(e);
        console.log(e.target.offsetX);
        setTarg(e.target.className);
        setOffset(e.nativeEvent.offsetX)
    };    

    return (
        <div className="Events" onClick={eventHandler} ref={outerDiv}>
            <h1>Events</h1>
            <h2>Target: {targ}. <br/> OffsetX: {offset}</h2>
            <div className="outer" >
                Внешний
                <div className="mid" >
                    Средний2
                    <div className="inn" >
                        Внутренний
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;
