import React, {useState, useEffect} from 'react';
import './SpeechSyn.css';

const SpeechSyn = () => {    
    const [ start, setStart ] = useState(false);
    const [ text, setText ] = useState("Hello! I love React and I really have fan with it !");
    const [ voices, setVoices ] = useState([]);
    const [ currentVoice, setCurrentVoice ] = useState(null);
    const [ [rate, pitch], setOptions ] = useState([1, 1]);

    const defineVoices = () => {
        const voices = speechSynthesis.getVoices();
        // console.log(voices, speechSynthesis );
        setVoices(voices);
    }

    useEffect(()=> {        
        if (!currentVoice) setCurrentVoice(voices[0]);
    
    }, [voices, currentVoice]);

    useEffect(() => {
        // console.log(speechSynthesis );
        const timer = setTimeout(defineVoices, 500);        
        
        // console.log('timer added');
        return () => {
            clearInterval(timer);           
            // console.log('timer removed');
        }
    }, []);
    
    useEffect(() => {
        if (start) toggle();
    // eslint-disable-next-line
    }, [currentVoice, rate, pitch]);

    const controlsHandler = ({ target: {name, value} }) => {
        switch(name) {
            case 'rate': setOptions([value, pitch]);
            break;
            case 'pitch': setOptions([rate, value]);
            break;
            case 'text': setText(value);
            break;
            default: return;
        }
    }    

    const speakHandler = () => {
        setStart(true);
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.voice = currentVoice;
        msg.pitch = pitch;
        msg.rate = rate;        
        speechSynthesis.speak(msg);
    }   

    const defineVoice = ({ target: {value}}) => {
        setStart(true);
        setCurrentVoice(voices.find(voice => voice.name === value));       
    }
    
    const toggle = (play = true) => {
        speechSynthesis.cancel();
        if (play) speakHandler();
    }

    const enterHitedCheck = ( { key } ) => {        
        if (key === 'Enter') {
            setStart(true);
            toggle();
        }
    }

    return (
        <div className="SpeechSyn">
            <h1>Speech Synthesis</h1>
            <select className="Select" onChange={defineVoice}>
                {voices.map(({name, lang})=><option key={name+lang} value={name}>{name}(lang)</option>)}
            </select>
            <label htmlFor="rate">Rate: {rate}</label>
            <input className="Rate" name="rate" type="range" onChange={controlsHandler} min={0} max={3} value={rate} step={0.1}/>
            <label htmlFor="pitch">Pitch: {pitch}</label>
            <input className="Pitch" name="pitch" type="range" onChange={controlsHandler} min={0} max={2} value={pitch} step={0.1}/>
            <textarea
                name="text" 
                className="TextArea" 
                onChange={controlsHandler} 
                onKeyDown={(e) => enterHitedCheck(e.nativeEvent)} 
                value={text}
            />
            <div className="ButtonContainer">
                <button className="StopButton btn" onClick={() => toggle(false)}>Stop</button>
                <button className="SpeakButton btn" onClick={toggle}>Speak</button>
            </div>
        </div>
    )
}

export default SpeechSyn;
