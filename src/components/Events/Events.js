import React, { useState, createRef } from 'react';
import axios from 'axios';
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
    const getData = async () => {
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        const data = await axios(endpoint);
        console.log(data);

    }    

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
            <button onClick={getData}>Get Data</button>
        </div>
    )
}

export default Events;
