import React from 'react';
import './Key.css';

const Key = ({ letter, label, playing, onTransitionEnd }) => {
    // const play = playing ? 'playing' : null;
    // console.log('play :', play); 
    // console.log('playing :', playing);

    return (        
        <div 
            // id={id} 
            className={['Key', playing ? 'playing' : null].join` `}
            onTransitionEnd={onTransitionEnd}
        >
            <kbd>{letter}</kbd>
            <span className="sound">{label}</span>
        </div>        
    )
}
export default Key;
