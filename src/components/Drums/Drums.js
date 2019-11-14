import React, { useEffect, useState } from 'react';
import Key from './Key';
import './Drums.css';
import clap from './audio/clap.mp3';
import hihat from './audio/hihat.wav';
import kick from './audio/kick.wav';
import openhat from './audio/openhat.wav';
import boom from './audio/boom.wav';
import hey from './audio/hey.wav';
import screech from './audio/screech.wav';
import hammock from './audio/hammock.wav';
import triangle from './audio/triangle.wav';

const Drums = () => {
    const keys = {
        65: { id: 1, key: 'A', label: 'CLAP', sound: new Audio(clap) },
        83: { id: 2, key: 'S', label: 'HIHAT', sound: new Audio(hihat) },
        68: { id: 3, key: 'D', label: 'KICK', sound: new Audio(kick) },
        70: { id: 4, key: 'F', label: 'OPENHAT', sound: new Audio(openhat) },
        71: { id: 5, key: 'G', label: 'BOOM', sound: new Audio(boom) },
        72: { id: 6, key: 'H', label: 'HEY', sound: new Audio(hey) },
        74: { id: 7, key: 'J', label: 'SCREECH', sound: new Audio(screech) },
        75: { id: 8, key: 'K', label: 'HAMMOCK', sound: new Audio(hammock) },
        76: { id: 9, key: 'L', label: 'TRIANGLE', sound: new Audio(triangle) }
    }; 

    const [playing, setPlaying] = useState(0);    
    
    const keyHandler = (event) => {
        const key = event.keyCode || Number(event.target.dataset.key);        
        if (!keys[key]) return        
        
        setPlaying(key);
        keys[key].sound.currentTime = 0;
        keys[key].sound.play();
    };

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);        
        return () => window.removeEventListener('keydown', keyHandler);
        // eslint-disable-next-line
    }, []);

    const transitionEndHandler = (e) => {        
        if (e.propertyName !== 'transform') return
        setPlaying(0);        
    };

    const sortFunction = (a, b) => a[1].id - b[1].id;    
    
    return (
        <div className="Drums">
            <h1>Drums</h1>
            <div className="Keys">
               {Object.entries(keys).sort(sortFunction).map(([dataKey, { id, key, label}]) => {
                    return (
                        <Key                              
                            dataKey={dataKey}
                            key={id} 
                            letter={key} 
                            label={label}                            
                            playing={playing === Number(dataKey)}
                            onTransitionEnd={transitionEndHandler}
                            onClick={keyHandler}
                        />
                    )
                })}
            </div>           
        </div>
    )
}

export default Drums;
