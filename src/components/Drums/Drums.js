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
    // const keys = [
    //     {dataKey: 65, key: 'A', label: 'CLAP'},
    //     {dataKey: 83, key: 'S', label: 'HIHAT'},
    //     {dataKey: 68, key: 'D', label: 'KICK'},
    //     {dataKey: 70, key: 'F', label: 'OPENHAT'},
    //     {dataKey: 71, key: 'G', label: 'BOOM'},
    //     {dataKey: 72, key: 'H', label: 'HEY'},
    //     {dataKey: 74, key: 'J', label: 'SCREECH'},
    //     {dataKey: 75, key: 'K', label: 'HAMMOCK'},
    //     {dataKey: 76, key: 'L', label: 'TRIANGLE'}
    // ];

    const keys = {
        65: {key: 'A', label: 'CLAP', file: clap},
        83: {key: 'S', label: 'HIHAT', file: hihat},
        68: {key: 'D', label: 'KICK', file: kick},
        70: {key: 'F', label: 'OPENHAT', file: openhat},
        71: {key: 'G', label: 'BOOM', file: boom},
        72: {key: 'H', label: 'HEY', file: hey},
        74: {key: 'J', label: 'SCREECH', file: screech},
        75: {key: 'K', label: 'HAMMOCK', file: hammock},
        76: {key: 'L', label: 'TRIANGLE', file: triangle}
    };

    // console.log('keys', keys);
    console.log('keyss', Object.entries(keys));

    // const sounds = {
    //     65: clap,
    //     83: hihat,
    //     68: kick,
    //     70: openhat,
    //     71: boom,
    //     72: hey,
    //     74: screech,
    //     75: hammock,
    //     76: triangle
    // };

    // const [playing, setPlaying] = useState({
    //     65: false,
    //     83: false,
    //     68: false,
    //     70: false,
    //     71: true,
    //     72: false,
    //     74: false,
    //     75: false,
    //     76: false
    // });

    const [playing, setPlaying] = useState(0);    
    
    const keyHandler = ({ keyCode }) => {
        if (!keys[keyCode]) return
        const sound = new Audio(keys[keyCode].file);
        setPlaying(keyCode);
        sound.currentTime = 0;
        sound.play();

        // console.log('sound', sound);
        // console.log('boom :', sound, typeof sound);
    }

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);
        return () => {
            window.removeEventListener('keydown', keyHandler);
            // console.log('removed eventListener');
        }
    }, []);

    function transitionEndHandler(e) {
        // e.persist();
        if (e.propertyName !== 'transform') return
        setPlaying(0);
        // console.log('transitionEndHandler', e);
        // console.log('this :', this);
    }
    
    
    return (
        <div className="Drums">
            <h1>Drums</h1>
            <div className="Keys">
               {Object.entries(keys).map(([dataKey, { key, label}]) => {                    
                    return (
                        <Key 
                            dataKey={dataKey} 
                            key={key} 
                            letter={key} 
                            label={label} 
                            // playing={playing[dataKey]}
                            playing={playing === dataKey}
                            onTransitionEnd={transitionEndHandler}
                        />
                   )
               })}
            </div>           
        </div>
    )
}

export default Drums;
