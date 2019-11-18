import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="Logo"><Link to="/" ><h3>React App</h3></Link></div>
            <div className="Menu">
                <Link to="/" >Home</Link>       {/* TODO: Replace Links with NavLinks  */}
                <Link to="/clock">Clock</Link>  {/*  add "Selected" class to menu Item */}
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
                <Link to="/hack/1">Hacker News</Link>
                <Link to="/info">Info</Link>                
                {/* <Link to="/git">Git Issues</Link> */}
            </div>
        </header>
    )
}

export default Header;
