import React from 'react';
import './LinkEffect.css';

const LinkEffect = () => {
    const highlight = React.createRef();
    
    const highlightHandler = ({target}) => {       
        const {offsetTop, offsetLeft, clientHeight, clientWidth } = target;
        
        highlight.current.style.top = offsetTop+"px";
        highlight.current.style.left = offsetLeft+"px";
        highlight.current.style.height = clientHeight+"px";
        highlight.current.style.width = clientWidth+"px";
    }

    return (
        <div className="LinkEffect Block2">
            {Array.from(Array(12), (_,i) => (
                <a key={i} href="/#" className="innerDiv" onMouseEnter={highlightHandler}>Link {++i}</a>
            ))}
            <span className="highlight" ref={highlight}></span>            
        </div>
    )
}

export default LinkEffect;
