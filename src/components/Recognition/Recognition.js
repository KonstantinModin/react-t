import React, { useState, useEffect } from 'react';
import './Recognition.css';
import unicorne from './photo/1.png';

const Recognition = () => {    

    const [ recText, setRecText ] = useState('');
    const [ lang, setLang ] = useState('en-US');
    const [ wholeText, setWholeText ] = useState([]);
    const [ unicornClasses, setUnicornClasses ] = useState("Unicorne");

    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;        
        
        const recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = lang;        
       
        const recFunction = (e) => {
            const transcript = Array.from(e.results)
            .map(i => i[0])
            .map(i => i.transcript).join` `;
           
            setRecText(transcript);

            if (transcript.includes('единорог') || transcript.includes('unicorn')) {
                setUnicornClasses("Unicorne Active");
            };
            if (transcript.includes('не хочу') || transcript.includes('хватит') || transcript.includes("don't want")) {
                setUnicornClasses("Unicorne");
            }

            if (e.results[0].isFinal) {
                const newArray = [...wholeText, transcript];
                setWholeText(newArray);
                setRecText('');                
            }
        }

        recognition.addEventListener('result', recFunction);        
        recognition.addEventListener('end', recognition.start);
        recognition.start();
        
        return () => {
            recognition.removeEventListener('result', recFunction);
            recognition.removeEventListener('end', recognition.start);
            recognition.stop();
        }

    }, [wholeText, lang]);

    const resetHandler = () => {
        setWholeText([]);
        setRecText('');
        setUnicornClasses("Unicorne");
    }

    const selectHandler = ({ target }) => {        
        setLang(target.value);
    }
    

    return (
        <div className="Recognition">            
            <div className="top">
                <h2>Speech Recognition</h2>
                <div className="secondLine">
                    <h4>Say something ...</h4>
                    <h6>BTW would you like to see unicorn? Or you don't want?</h6>
                </div>
                <div className="controls">
                    <button className="btn btn-danger" onClick={resetHandler}>Reset</button>            
                    <label>Language:</label>
                    <select onChange={selectHandler}>
                        <option value='en-US'>English</option>
                        <option value='ru'>Russian</option>
                    </select>
                </div>
            </div>           
                    
            <div className="textContainer">
                {wholeText.map(t => <div className="tex" key={t+Math.random()}>{t}</div>)}
                <p className="tex">{recText}</p>
            </div>
            <img className={unicornClasses} src={unicorne} width={800}alt="my lovely unicorn"/>            
        </div>
    )
}

export default Recognition;
