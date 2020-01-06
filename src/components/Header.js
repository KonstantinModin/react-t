import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="Logo"><Link to="/" ><h3>React App</h3></Link></div>
            <div className="Menu">
                <NavLink exact to="/" >Home</NavLink>       
                <NavLink exact={false} to="/hack/1" isActive={(_, location)=>{                    
                    return /^\/hack\/.+$/.test(location.pathname);
                }}>Hacker News</NavLink>
                <NavLink to="/clock"><span role="img" aria-label="clock">🕑</span></NavLink>  
                <NavLink to="/todo">Todo</NavLink>                
                <NavLink to="/drums">Drums</NavLink>
                <NavLink to="/webcam">WebCam</NavLink>
                <NavLink to="/draw">Draw</NavLink>
                <NavLink to="/variables">CSS Vars</NavLink>
                <NavLink to="/features">Featrs</NavLink>
                <NavLink to="/recognition">Recogntn</NavLink>
                <NavLink to="/synthesis">Speech Syn</NavLink>
                <NavLink to="/videoplayer">Video Plr</NavLink>
                <NavLink to="/game">Game</NavLink>                
                <NavLink to="/misc">Misc</NavLink>
                <NavLink to="/test">Test</NavLink>                
                {/* <NavLink to="/git">Git Issues</NavLink> */}
            </div>
        </header>
    )
}

export default Header;
