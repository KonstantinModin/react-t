import React, { useState, useEffect } from 'react';
import './Recognition.css';
import unicorne from './photo/1.png';

const Recognition = () => {
    // const [ status, setStatus ] = useState(false);
    const [ recText, setRecText ] = useState('');
    const [ wholeText, setWholeText ] = useState([]);
    const [ unicornClasses, setUnicornClasses ] = useState("Unicorne");

    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;        
        
        const recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
       
        const recFunction = (e) => {
            const transcript = Array.from(e.results)
            .map(i => i[0])
            .map(i => i.transcript).join` `;
           
            setRecText(transcript);

            if (transcript.includes('единорог')) {
                setUnicornClasses("Unicorne Active");
            };
            if (transcript.includes('не хочу') || transcript.includes('хватит')) {
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
            recognition.addEventListener('result', recFunction);
            recognition.removeEventListener('end', recognition.start);
            recognition.stop();
        }

    }, [wholeText]);

    const resetHandler = () => {
        setWholeText([]);
        setRecText('');
    }

    // const classesHandler = () => {
    //     setUnicornClasses(unicornClasses === "Unicorne" ? "Unicorne Active" : "Unicorne");
    // }

    return (
        <div className="Recognition">            
            <h2>Speech Recognition</h2>            
            <button className="btn btn-danger" onClick={resetHandler}>Reset</button>            
            {/* <button className="btn" onClick={classesHandler}>Unicorne</button> */}
                    
            <div className="textContainer">{wholeText.map(t => <div className="tex" key={t}>{t}</div>)}
                <p className="tex">{recText}</p>
            </div>
            <img className={unicornClasses} src={unicorne} width={800}alt="my lovely unicorn"/>
            
        </div>
    )
}

export default Recognition;
