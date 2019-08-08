import React, { useState, useEffect } from 'react';
import photo from './foto-1.jpg';
import './Variables.css';

const Variables = () => {
    const { appCodeName, appName, appVersion,  language, userAgent, vendor, geolocation } = navigator;
    const [ position, setPosition ] = useState([0, 0]);
    // const [ controls, setControls ] = useState({
    //     spacing: 10,
    //     blur: 10,
    //     color: '#ffc600'
    // });
    
    useEffect(() => {    
        geolocation.getCurrentPosition((position) => {
            // console.log('position :', position);
            setPosition([position.coords.latitude, position.coords.longitude]);
        });
    // eslint-disable-next-line       
    }, []);
    
    const inputHandler = ({ target }) => {
        const suffix = target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);
        console.log('e.target.value', target.value);
        console.log('e.target.value', target.name);
        
    }

    return (
        <div className="Variables">
            <h1><span className="hl">V</span>ariables</h1>
            <div className="VariblesSubDiv">
                <div className="VarControls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input 
                        type="range" name="spacing" min={10} max={100} data-sizing="px"
                        onChange={inputHandler}/>
                    <label htmlFor="blur">Blur:</label>
                    <input 
                        type="range" name="blur" min={0} max={25} data-sizing="px"
                        onChange={inputHandler}/>
                    <label htmlFor="base">Base Color:</label>
                    <input 
                        className="ColorInput" type="color" name="base"  
                        onChange={inputHandler}/>
                </div>
                <img src={photo} alt="sample"/>
            </div>        
            <div className="Info">
                <h4>Your Browser Info:</h4>
                <span>appCodeName: {appCodeName} </span>
                <span>appName: {appName}</span><br/>
                <span>appVersion: {appVersion}</span><br/>
                <span>userAgent: {userAgent}</span><br/>           
                <span>language: {language} </span>            
                <span>vendor: {vendor}</span><br/>
                <span>Geo position:</span><br/>
                <span>Latitude: {position[0].toFixed(7)} </span> <br/>
                <span>Longitude: {position[1].toFixed(7)}</span>
            </div>
        </div>
    )
}

export default Variables;
