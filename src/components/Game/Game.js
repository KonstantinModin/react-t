import React, { useEffect, useState, useRef } from 'react';
import './Game.css';
import sound from './sound.wav';

const Game = () => {
    const [ randHole, setRandHole ] = useState(null);
    const [ timeLeft, setTimeLeft ] = useState(20);
    const [ level, setLevel ] = useState(1);
    const [ score, setScore ] = useState(0);
    const [ gameOver, setGameOver ] = useState(false);
    const [ playing, setPlaying ] = useState(false);
    const [ finishTime, setFinishTime ] = useState(null);
    const soundHit = new Audio(sound);
    
    const timerId = useRef('');
    const timePassedId = useRef('');

    const showSlide = () => {
        console.log('show Slide!');
        setRandHole(Math.round(Math.random()*20)%5);           
    }

    const startNewLevel = () => {
        clearInterval(timerId.current);
        timerId.current = setInterval(showSlide, 800-level*100);
    }    
    
    const startGame = () => {
        setPlaying(true);
        setFinishTime(Date.now());
        
        const updateTimeLeft = () => {
            console.log(finishTime||Date.now(),timeLeft*1000,Date.now());
            setTimeLeft(((finishTime||Date.now()+timeLeft*1000-Date.now())/1000)|0);            
        }
        startNewLevel();
        timePassedId.current = setInterval(updateTimeLeft, 1000);

    }

    const moleClicked = () => {
        setTimeLeft(time=>time+6);
        setRandHole(null);
        setScore(score => score + 1);
        soundHit.currentTime = 0;
        soundHit.play();
    }

    useEffect(()=>{
        console.log('timeLeft Effect');
        if (timeLeft < 1) {
            console.log('game Over!');
            clearInterval(timerId.current);            
            clearInterval(timePassedId.current);           
            setGameOver(true);
        }
    }, [timeLeft]);

    useEffect(()=> {
        if (playing){
            console.log('score effect');
            if (!(score % 10) && score) setLevel(level=>level+1);
        }
    },[score]);

    useEffect(()=>{
        
        if (playing){
            console.log('level effect');
            startNewLevel();            
        }
    },[level]);


    useEffect(() => {
        console.log('only cleaning effect');        
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
        setTimeLeft(20);
    }

    return (
        <div className="Game">
            <div className="item"><h1>Game</h1></div>
            <div className="topBar">
                <div className="item"><h3 className="level">Level: {level}</h3></div>                            
                <div className="item"><h3 className="score">Score: {score}</h3></div>                            
                <div className="item"><h3 className="time">Time left: {timeLeft}</h3></div>                            
            </div>
            {gameOver&&<div className="gameOver" onDoubleClick={clearGameOver}><h3>Game Over!</h3></div>}
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