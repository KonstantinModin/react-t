import React from 'react';
import './SpeechSyn.css';

const SpeechSyn = () => {
    return (
        <div className="SpeechSyn">
            <h1>Speech Synthesis</h1>
            <select className="Select">
                <option>Select a Voice</option>
            </select>
            <label for="rate">Rate:</label>
            <input className="Rate" name="rate" type="range" min={0} max={3} value={1} step={0.1}/>
            <label for="pitch">Pitch:</label>
            <input className="Pitch" name="pitch" type="range" min={0} max={2} step={0.1}/>
            <textarea className="TextArea">Hello! I love JavaScript!</textarea>
            <div className="ButtonContainer">
                <button className="StopButton btn">Stop</button>
                <button className="SpeakButton btn">Speak</button>
            </div>
        </div>
    )
}

export default SpeechSyn;
