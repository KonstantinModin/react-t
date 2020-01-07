import React, { useState, createRef } from 'react';
import './Scroll.css';

const Scroll = () => {
    const [ isDown, setIsDown ] = useState(false);
    const [ startX, setStartX ] = useState(null);
    const [ startY, setStartY ] = useState(null);
    const [ scrollLeft, setScrollLeft ] = useState(null);
    const [ persp, setPersp ] = useState(100);

    const scrollDiv = createRef();

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        
        //scroll left-right
        const x = e.nativeEvent.pageX - scrollDiv.current.offsetLeft;
        const walk = x - startX;
        scrollDiv.current.scrollLeft = scrollLeft - walk * 1;

        //perspective
        const notSoMuch = (a) => a < 50 ? 50 : a;
        const y = e.nativeEvent.pageY - scrollDiv.current.offsetTop;
        const walkY = y - startY;
        scrollDiv.current.style.perspective = notSoMuch(persp - walkY * 1)+'px'; 

    }
    const handleMouseDown = (e) => {
        setIsDown(true);
        //scroll left-right
        setStartX(e.nativeEvent.pageX - scrollDiv.current.offsetLeft);
        setScrollLeft(scrollDiv.current.scrollLeft);

        //perspective
        setStartY(e.nativeEvent.pageY - scrollDiv.current.offsetTop);        
        setPersp(parseInt(scrollDiv.current.style.perspective));
    }

    return (
        <div 
            className={'Scroll' + (isDown? ' active' : '')}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => setIsDown(false)}
            onMouseUp={() => setIsDown(false)}
            onMouseMove={handleMouseMove}
            ref={scrollDiv}
            style={{perspective:'100px'}}
        >
            {[...Array(25)].map((e,i)=>{
                return <div key={i} className={`item item${i+1}`}>{`${('0'+(i+1)).slice(-2)}`}</div>
            })}     
        </div>
    )
}

export default Scroll;