import React, { useEffect } from 'react';
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
    const keys = [
        {dataKey: 65, key: 'A', label: 'CLAP'},
        {dataKey: 83, key: 'S', label: 'HIHAT'},
        {dataKey: 68, key: 'D', label: 'KICK'},
        {dataKey: 70, key: 'F', label: 'OPENHAT'},
        {dataKey: 71, key: 'G', label: 'BOOM'},
        {dataKey: 72, key: 'H', label: 'HEY'},
        {dataKey: 74, key: 'J', label: 'SCREECH'},
        {dataKey: 75, key: 'K', label: 'HAMMOCK'},
        {dataKey: 76, key: 'L', label: 'TRIANGLE'},
    ];
    const sounds = {
        65: clap,
        83: hihat,
        68: kick,
        70: openhat,
        71: boom,
        72: hey,
        74: screech,
        75: hammock,
        76: triangle,
    }

    
    
    const keyHandler = (d) => {
        const sound = new Audio(sounds[d.keyCode]);
        console.log('key Down', d.keyCode, sounds);
        sound.currentTime = 0;
        sound.play();
        console.log('boom :', sound, typeof sound);
    }

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);
        return () => {
            window.removeEventListener('keydown', keyHandler);
            console.log('removed eventListener');
        }
    }, []);
    
    
    return (
        <div className="Drums">
            <h1>Drums</h1>
            <div className="Keys">
               {keys.map(({ dataKey, key, label}) => {
                   return (
                       <Key dataKey={dataKey} key={key} letter={key} label={label}/>
                   )
               })}
            </div>
            {/* <Boom /> */}
            
        </div>
    )
}

export default Drums;
