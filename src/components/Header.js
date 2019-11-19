import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <div className="Logo"><Link to="/" ><h3>React App</h3></Link></div>
            <div className="Menu">
                <NavLink exact activeClassName="selected" to="/" >Home</NavLink>       {/* TODO: Replace NavLinks with NavNavLinks  */}
                <NavLink activeClassName="selected" to="/clock">Clock</NavLink>  {/*  add "Selected" class to menu Item */}
                <NavLink activeClassName="selected" to="/drums">Drums</NavLink>
                <NavLink activeClassName="selected" to="/webcam">WebCam</NavLink>
                <NavLink activeClassName="selected" to="/draw">Draw</NavLink>
                <NavLink activeClassName="selected" to="/variables">CSS Vars</NavLink>
                <NavLink activeClassName="selected" to="/features">Featrs</NavLink>
                <NavLink activeClassName="selected" to="/recognition">Recogntn</NavLink>
                <NavLink activeClassName="selected" to="/synthesis">Speech Syn</NavLink>
                <NavLink activeClassName="selected" to="/videoplayer">Video Plr</NavLink>
                <NavLink activeClassName="selected" to="/game">Game</NavLink>                
                <NavLink activeClassName="selected" to="/misc">Misc</NavLink>
                <NavLink exact={false} activeClassName="selected" to="/hack/1" isActive={(_, location)=>{                    
                    return /^\/hack\/.+$/.test(location.pathname);
                }}>Hacker News</NavLink>
                <NavLink activeClassName="selected" to="/info">Info</NavLink>                
                {/* <NavLink activeClassName="selected" to="/git">Git Issues</NavLink> */}
            </div>
        </header>
    )
}

export default Header;
