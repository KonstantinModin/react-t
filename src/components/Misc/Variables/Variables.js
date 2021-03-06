import React, { useState } from 'react';
import photo from './foto-1.jpg';
// import NavInfo from './NavInfo';
import './Variables.css';

const Variables = () => {    
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
    
    
    const inputHandler = ({ target: {dataset, name, value}}) => {
        const updatedControls = {...controls};
        updatedControls[name] = value;
        setControls({...updatedControls});
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
        document.documentElement.style.setProperty('--spacing', '10px'); 
        document.documentElement.style.setProperty('--blur', '0px'); 
        document.documentElement.style.setProperty('--base', '#ffc600'); 
        document.documentElement.style.setProperty('--brightness', '100%'); 
        document.documentElement.style.setProperty('--grayscale', '0%'); 
        document.documentElement.style.setProperty('--hue', '0deg'); 
        document.documentElement.style.setProperty('--invert', '0%'); 
        document.documentElement.style.setProperty('--opacity', '100%'); 
        console.log('reset!');
    }
    
    return (
        <div className="Variables">
            {/* <NavInfo /> */}
            <div className="VariblesSubDiv">
                <h2><span className="hl">CSS </span>Variables</h2>
                <div className="VarControls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input 
                        type="range" name="spacing" min={10} max={80} value={controls.spacing} data-sizing="px"
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
        </div>
    )
}

export default Variables;
