import React from 'react';
import './LinkEffect.css';

const LinkEffect = () => {
    return (
        <div className="LinkEffect Block2">
            {Array.from(Array(12), (_,i) => <a href="/#" className="innerDiv">Link {++i}</a>)}            
        </div>
    )
}

export default LinkEffect;
