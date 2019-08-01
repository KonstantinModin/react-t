import React from 'react';
import './Key.css';

const Key = ({ dataKey, letter, label}) => {
    return (        
        <div data-key={dataKey} className="Key">
            <kbd>{letter}</kbd>
            <span className="sound">{label}</span>
        </div>        
    )
}
export default Key;
