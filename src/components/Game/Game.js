import React, { useEffect, useState, useRef } from 'react';
import './Game.css';
import sound from './sound.wav';

const Game = () => {
    const [ randHole, setRandHole ] = useState(null);
    const [ timePassed, setTimePassed ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ gameOver, setGameOver ] = useState(false);
    const soundHit = new Audio(sound);
    
    const timerId = useRef('');
    const timePassedId = useRef('');

    const startGame = () => {        
        let time = Date.now();

        const showSlide = () => {
            setRandHole(Math.round(Math.random()*5));           
        }
        const updateTimePassed = () => {
            setTimePassed(((Date.now()-time)/1000)|0);            
        }
        timerId.current = setInterval(showSlide, 700);
        timePassedId.current = setInterval(updateTimePassed, 1000);

    }

    const moleClicked = () => {
        setRandHole(null);
        setScore(score => score + 1);
        soundHit.currentTime = 0;
        soundHit.play();
    }

    useEffect(()=>{
        if (timePassed > 20) {
            console.log('game Over!');
            clearInterval(timerId.current);            
            clearInterval(timePassedId.current);           
            setGameOver(true);
        }
    }, [timePassed]);


    useEffect(() => {        
        return () => {
            clearInterval(timerId.current);
            clearInterval(timePassedId.current);
            console.log('timer cleared!');
        };       
    }, [timerId, timePassedId]);

    const clearGameOver = () => {
        setGameOver(false);
        setScore(0);
        setRandHole(null);
        setTimePassed(0);
    }

    return (
        <div className="Game">
            <div className="topBar">
                <div className="item"><h1>Game</h1></div>
                <div className="item"><h3 className="score">Your score is: {score}</h3></div>                            
                <div className="item"><h3 className="time">Time Passed: {timePassed}</h3></div>                            
            </div>
            {gameOver&&<div className="gameOver" onClick={clearGameOver}><h3>Game Over!</h3></div>}
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