import React from 'react';
import Key from './Key';
import './Drums.css';

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
        </div>
    )
}

export default Drums;
