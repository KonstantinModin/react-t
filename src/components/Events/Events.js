import React, { useState, createRef } from 'react';
import './Events.css';

const Events = () => {
    const [ targ, setTarg ] = useState(null);
    const outerDiv = createRef();
    console.log(this);

    function eventHandler(e) {
        console.log(this);
        setTarg(e.target.className);
    };

    return (
        <div className="Events" onClick={() => eventHandler.bind(outerDiv.current)} ref={outerDiv}>
            <h1>Events</h1>
            <h2>Target: {targ}</h2>
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
