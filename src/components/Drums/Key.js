import React from 'react';
import './Key.css';

const Key = ({ dataKey, letter, label, playing, onTransitionEnd, onClick }) => {
    return (        
        <div             
            className={['Key', playing ? 'playing' : null].join` `}
            onTransitionEnd={onTransitionEnd}
            onClick={onClick}
            data-key={dataKey}
        >
            <kbd data-key={dataKey}>{letter}</kbd>
            <span className="sound" data-key={dataKey}>{label}</span>
        </div>        
    )
}

export default Key;
