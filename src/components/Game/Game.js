import React, { useEffect, useState } from 'react';
import './Game.css';
import sound from './sound.wav';

const Game = () => {
    const [ randHole, setRandHole ] = useState(null);
    const [ score, setScore ] = useState(0);
    const soundHit = new Audio(sound);
        
        
    
    let timerId;

    const startGame = () => {
        const showSlide = () => {
            setRandHole(Math.round(Math.random()*5));
        }
        timerId = setInterval(showSlide, 700);
    }
    const moleClicked = () => {
        setRandHole(null);
        setScore(score=>score + 1);
        soundHit.currentTime = 0;
        soundHit.play();
    }


    useEffect(() => {        
        return () => {
            clearInterval(timerId);
            console.log('timer cleared!');
        };
        // eslint-disable-next-line
    }, [])

    return (
        <div className="Game">
            <div className="topBar">
                <div className="item"><h1>Game</h1></div>
                <div className="item"><h3 className="score">Your score is: {score}</h3></div>                            
            </div>
            <div className="Grid">
                {[...Array(6)].map((e,i)=>
                    <div key={i} className={`hole hole${i+1}${i===randHole?' up':''}`}>
                        <div onClick={moleClicked} className="mole"></div>
                    </div>
                )}
            </div>
            <div>
                <button onClick={startGame}>Start!</button>
            </div>
        </div>
    )
}

export default Game;