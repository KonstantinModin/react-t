import React from 'react';
import './Features.css';

const Features = () => {
    const block1 = React.createRef();
    const shadowText = React.createRef();

    const shadow = (e) => {
        const walk = 100;
        const blur = 3;

        console.dir(e.target);
        const { offsetWidth: width, offsetHeight: height } = block1.current;
        let { offsetX: x, offsetY: y } = e;
        if (e.target.localName === 'h1') {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }
        // console.log('width, height :', width, height);
        // console.log('x, y :', x, y);
        const xWalk = ~~((x / width * walk) - walk / 2);
        const yWalk = ~~((y / height * walk) - walk / 2);
        console.log(~~xWalk, ~~yWalk);
        // console.log()
        shadowText.current.style.textShadow = `
            ${xWalk}px ${yWalk}px ${blur}px rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px ${blur}px rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * - 1}px ${blur}px rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px ${blur}px rgba(0,0,255,0.7)
        `;
    }
    
    return (
        <div className="Features">
            <h1>Features</h1>
            <div className="Grid">
                <div className="Block1" onMouseMove={(e) => shadow(e.nativeEvent)} ref={block1}>
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
