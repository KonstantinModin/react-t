import React, { useEffect } from 'react';
import Key from './Key';
import './Drums.css';
import sound from './audio/boom.wav';

const Drums = () => {
    const keys = [
        {dataKey: 65, key: 'A', label: 'CLAP'},
        {dataKey: 83, key: 'S', label: 'HIHAT'},
        {dataKey: 68, key: 'D', label: 'KICK'},
        {dataKey: 70, key: 'F', label: 'OPENHAT'},
        {dataKey: 71, key: 'G', label: 'BOOM'},
        {dataKey: 72, key: 'H', label: 'RIDE'},
        {dataKey: 74, key: 'J', label: 'SNARE'},
        {dataKey: 75, key: 'K', label: 'TOM'},
        {dataKey: 76, key: 'L', label: 'TINK'},
    ];

    const Boom = new Audio(sound);


    const keyHandler = (d) => {
        console.log('key Down', d.keyCode);
        Boom.currentTime = 0;
        Boom.play();
        console.log('boom :', Boom, typeof Boom);
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
