import React, { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
    const block1 = React.createRef();
    const shadowText = React.createRef();

    const [ mouseIn, setMouseIn ] = useState(false);
    const [xCircle, setXCircle] = useState(-50);

    useEffect(() => {
        const cycle = setInterval(() => {
            console.log('mouseIn :', mouseIn);
            if (!mouseIn) {// let x = -50;
                console.log('begin', xCircle);
                // debugger;
                let r = 50;
                let y = Math.sqrt(r*r - xCircle*xCircle);
                if (shadowText.current) draw(xCircle, y);
                setXCircle(prev => {
                    console.log('state :', prev);
                    return prev > 50 ? -50 : prev + 1
                });
                
                console.log('end', xCircle, y);
                // debugger;
            }
        }, 1000);
        return () => {
            clearInterval(cycle);
        }
    }, []);



    const mouseMoveHandler = (e) => {
        const walk = 100;        

        const { offsetWidth: width, offsetHeight: height } = block1.current;
        let { offsetX: x, offsetY: y } = e;
        if (e.target.localName === 'h1') {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }
       
        const xWalk = ~~((x / width * walk) - walk / 2);
        const yWalk = ~~((y / height * walk) - walk / 2);
        
        console.dir(e.target);
        console.log('x, y :', x, y);
        console.log(~~xWalk, ~~yWalk);

        draw(xWalk, yWalk);
        
    }

    const draw = (xWalk, yWalk) => {
        const blur = 3;
        shadowText.current.style.textShadow = `
            ${xWalk}px ${yWalk}px ${blur}px rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px ${blur}px rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * - 1}px ${blur}px rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px ${blur}px rgba(0,0,255,0.7)
        `;
    }
    
    return (
        <div className="Features">
            <h1>Features{xCircle}{mouseIn.toString()}</h1>
            <div className="Grid">
                {/* <span>{mouseIn.toString()}</span> */}
                <div 
                    className="Block1" 
                    onMouseMove={(e) => mouseMoveHandler(e.nativeEvent)}
                    onMouseEnter={() => setMouseIn(true)} 
                    onMouseLeave={() => setMouseIn(false)}
                    ref={block1}
                >
                    <div className="innerDiv"><h1 ref={shadowText}>Shadow<br/>Effect</h1></div>
                </div>
                <div className="Block2">
                    <div className="innerDiv">2</div>
                </div>
                <div className="Block3">
                    <div className="innerDiv">3</div>
                </div>
                <div className="Block4">
                    <div className="innerDiv">4</div>
                </div>
                <div className="Block5">
                    <div className="innerDiv">5</div>
                </div>
                <div className="Block6">
                    <div className="innerDiv">6</div>
                </div>                
            </div>
        </div>
    )
}

export default Features;
