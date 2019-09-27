import React from 'react';
import './Game.css';

const Game = () => {
    const startGame = () => {
        
    }
    return (
        <div className="Game">
            <div className="topBar">
                <div className="item"><h1>Game</h1></div>
                <div className="item"><h3 className="score">Your score is: 0</h3></div>                            
            </div>
            <div className="Grid">
                {[...Array(6)].map((e,i)=>
                    <div key={i} className={`hole hole${i+1}`}>
                        <div className="mole"></div>
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