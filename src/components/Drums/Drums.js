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
        65: {id: 1, key: 'A', label: 'CLAP', file: clap},
        83: {id: 2, key: 'S', label: 'HIHAT', file: hihat},
        68: {id: 3, key: 'D', label: 'KICK', file: kick},
        70: {id: 4, key: 'F', label: 'OPENHAT', file: openhat},
        71: {id: 5, key: 'G', label: 'BOOM', file: boom},
        72: {id: 6, key: 'H', label: 'HEY', file: hey},
        74: {id: 7, key: 'J', label: 'SCREECH', file: screech},
        75: {id: 8, key: 'K', label: 'HAMMOCK', file: hammock},
        76: {id: 9, key: 'L', label: 'TRIANGLE', file: triangle}
    }; 

    const [playing, setPlaying] = useState(0);    
    
    const keyHandler = (event) => {
        const key = event.keyCode || Number(event.target.dataset.key);        
        if (!keys[key]) return
        
        const sound = new Audio(keys[key].file);
        setPlaying(key);
        sound.currentTime = 0;
        sound.play();
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
