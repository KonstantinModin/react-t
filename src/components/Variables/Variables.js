import React, { useState, useEffect } from 'react';
import photo from './foto-1.jpg';
import './Variables.css';

const Variables = (props) => {
    const { appCodeName, appName, appVersion,  language, userAgent, vendor, geolocation } = navigator;
    const [ position, setPosition ] = useState([0, 0]);
    const [ controls, setControls ] = useState({
        spacing: 10,
        blur: 0,
        base: '#ffc600',
        brightness: 100,
        grayscale: 0,
        hue: 0,
        invert: 0,
        opacity: 100
    });
    
    useEffect(() => {    
        geolocation.getCurrentPosition((position) => {            
            setPosition([position.coords.latitude, position.coords.longitude]);
        });
        console.log(props);
    // eslint-disable-next-line       
    }, []);
    
    const inputHandler = ({ target: {dataset, name, value}}) => {
        const updatedControls = {...controls};
        updatedControls[name] = value
        setControls({updatedControls});
        const suffix = dataset.sizing || '';
        document.documentElement.style.setProperty(`--${name}`, value + suffix);        
    }

    const resetHandler = () => {
        setControls({
            spacing: 10,
            blur: 0,
            base: '#ffc600',
            brightness: 100,
            grayscale: 0,
            hue: 0,
            invert: 0,
            opacity: 100
        });
        console.log('reset!');
    }

    return (
        <div className="Variables">
            <h1><span className="hl">CSS </span>Variables</h1>
            <div className="VariblesSubDiv">
                <div className="VarControls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input 
                        type="range" name="spacing" min={10} max={100} value={controls.spacing} data-sizing="px"
                        onChange={inputHandler}/>
                    <label htmlFor="blur">Blur:</label>
                    <input 
                        type="range" name="blur" min={0} max={25} value={controls.blur} data-sizing="px"
                        onChange={inputHandler}/>
                    <label htmlFor="brightness">Brightness:</label>
                    <input 
                        type="range" name="brightness" min={0} max={200} value={controls.brightness} data-sizing="%"
                        onChange={inputHandler}/>
                    <label htmlFor="grayscale">Grayscale:</label>
                    <input 
                        type="range" name="grayscale" min={0} max={100} value={controls.grayscale} data-sizing="%"
                        onChange={inputHandler}/>
                    <label htmlFor="hue">Hue:</label>
                    <input 
                        type="range" name="hue" min={0} max={360} value={controls.hue} data-sizing="deg"
                        onChange={inputHandler}/>
                    <label htmlFor="invert">Invert:</label>
                    <input 
                        type="range" name="invert" min={0} max={100} value={controls.invert} data-sizing="%"
                        onChange={inputHandler}/>
                    <label htmlFor="opacity">Opacity:</label>
                    <input 
                        type="range" name="opacity" min={0} max={100} value={controls.opacity} data-sizing="%"
                        onChange={inputHandler}/>
                    <label htmlFor="base">Base Color:</label>
                    <input 
                        className="ColorInput" type="color" name="base" value={controls.base}  
                        onChange={inputHandler}/>
                    <button className="btn btn-danger Reset" onClick={resetHandler}>Reset</button>
                </div>
                <img src={photo} alt="sample"/>
            </div>        
            <div className="Info">
                <div className="AccLabel">
                    <h4>Your Browser Info:</h4>
                </div>                
                <div className="AccContent">
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
        </div>
    )
}

export default Variables;
