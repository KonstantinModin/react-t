import React, { useState, createRef } from 'react';
import './Events.css';

const Events = () => {
    const [ targ, setTarg ] = useState(null);
    const [ offset, setOffset ] = useState(null);
    const [ pageX, setPageX ] = useState(null);
    const outerDiv = createRef();    

    function eventHandler(e) {    
        e.persist();
        console.log(e);
        console.dir(outerDiv.current);
        console.log(e.target.offsetX);
        setTarg(e.target.className);
        setOffset(e.nativeEvent.offsetX)
        setPageX(e.nativeEvent.pageX-outerDiv.current.offsetLeft);
    };    

    return (
        <div className="Events" onClick={eventHandler} ref={outerDiv}>
            <h1>Events</h1>
            <h2>Target: {targ}. <br/> OffsetX: {offset}</h2><br/>
            <h2>PageX - div.offsetLeft: {pageX}</h2>
            <div className="other"></div>
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
