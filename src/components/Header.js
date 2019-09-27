import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="Logo"><h1>React App</h1></div>
            <div className="Menu">
                <Link to="/" >Home</Link>
                <Link to="/clock">Clock</Link>
                <Link to="/drums">Drums</Link>
                <Link to="/webcam">WebCam</Link>
                <Link to="/draw">Draw</Link>
                <Link to="/variables">CSS Vars</Link>
                <Link to="/features">Features</Link>
                <Link to="/recognition">Recognition</Link>
                <Link to="/synthesis">Speech Synth</Link>
                <Link to="/videoplayer">Video Player</Link>
                <Link to="/events">E</Link>
                <Link to="/game">Game</Link>
            </div>
        </header>
    )
}

export default Header;
