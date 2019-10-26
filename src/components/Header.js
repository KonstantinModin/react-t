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
                <Link to="/features">Featrs</Link>
                <Link to="/recognition">Recogntn</Link>
                <Link to="/synthesis">Speech Syn</Link>
                <Link to="/videoplayer">Video Plr</Link>
                <Link to="/game">Game</Link>                
                <Link to="/misc">Misc</Link>
                <Link to="/hack">Hacker News</Link>
                <Link to="/git">Git Issues</Link>
            </div>
        </header>
    )
}

export default Header;
