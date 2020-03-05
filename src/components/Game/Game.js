import React, { useEffect, useState, useRef } from 'react';
import './Game.css';
import sound from './oink.wav';

const Game = () => {
    const [ randHole, setRandHole ] = useState(null);
    const [ timeLeft, setTimeLeft ] = useState(20);
    const [ level, setLevel ] = useState(1);
    const [ score, setScore ] = useState(0);
    const [ scoreVis, setScoreVis ] = useState(0);
    const [ gameOver, setGameOver ] = useState(false);
    const [ playing, setPlaying ] = useState(false);
    
    const soundHit = new Audio(sound);
    
    const timerId = useRef('');
    const timePassedId = useRef('');
    const startTime = useRef('');

    const showSlide = () => setRandHole(Math.round(Math.random()*20)%6);

    const startNewLevel = () => {
        clearInterval(timerId.current);
        timerId.current = setInterval(showSlide, 1000-level*100);
    }    
    
    const startGame = () => {
        setPlaying(true);
        startTime.current = Date.now();        
        
        const updateTimeLeft = () => {            
            setTimeLeft(((startTime.current + timeLeft*1000-Date.now())/1000)|0);            
        }
        startNewLevel();
        timePassedId.current = setInterval(updateTimeLeft, 1000);
    }

    const moleClicked = () => {
        startTime.current = startTime.current + 1000;
        setRandHole(null);
        setScore(score => score + 1);
        setScoreVis(score => score + level);
        soundHit.currentTime = 0;
        soundHit.play();        
    }

    useEffect(()=>{
        // console.log('timeLeft Effect');
        if (timeLeft < 1) {
            console.log('game Over!');
            clearInterval(timerId.current);            
            clearInterval(timePassedId.current);           
            setGameOver(true);
            setPlaying(false);
            const localScore = parseInt(localStorage.getItem('topScore'));
            // console.log(score, localScore, score > localScore, !localScore  )
            if (scoreVis > localScore || !localScore) {
                localStorage.setItem('topScore', scoreVis);
            }
        }
    // eslint-disable-next-line
    }, [timeLeft]);

    useEffect(()=> {
        if (playing){
            if (!(score % 10) && score) {
                setLevel(level=>level+1);
                console.log('levelup');
            }
        }
    // eslint-disable-next-line
    }, [ score ]);

    useEffect(()=>{        
        if (playing){
            console.log('level effect changing intervals');
            startNewLevel();            
        }
    // eslint-disable-next-line
    }, [ level ]);


    useEffect(() => {
        // console.log('only cleaning effect');        
        return () => {
            clearInterval(timerId.current);
            clearInterval(timePassedId.current);
            console.log('timer cleared!');
        };       
    }, [timerId, timePassedId]);

    const clearGameOver = () => {
        setGameOver(false);
        setScore(0);
        setScoreVis(0);
        setRandHole(null);
        setTimeLeft(20);
        setLevel(1);
    }    

    return (
        <div className="Game">
            <div className="item"><h1>Catch Peppa Pig!</h1></div>
            <div className="topBar">
                <div className="item"><h3 className="level">Level: {level}</h3></div>                            
                <div className="item"><h3 className="score">Score: {scoreVis}</h3></div>                            
                <div className="item"><h3 className="time">Time left: {playing && timeLeft}</h3></div>                            
            </div>
            {gameOver&&<div className="gameOver" onDoubleClick={clearGameOver}>
                <div className="label">
                    <div><h1>Game Over!</h1></div>
                    <div><h2>Your score is: {scoreVis}. Top Score is: {localStorage.getItem('topScore')||scoreVis}</h2></div>
                    <div><h3>Double click to continue ... </h3></div>
                </div>
            </div>}
            <div className="Grid">
                {[...Array(6)].map((e,i)=>
                    <div key={i} className={`hole hole${i+1}${i===randHole?' up':''}`}>
                        <div 
                            onClick={moleClicked} 
                            className="mole">
                        </div>
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