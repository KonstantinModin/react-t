import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
    const menuData = [
        {
            name: 'about',             
            caption: 'About',
            kids: (
                <div className="dropdown dropdown1">
                    <div className="bio">
                        <img 
                            src="https://avatars2.githubusercontent.com/u/45493372?s=460&v=4" 
                            width={80} 
                            alt="avatar"/>
                        <p>Konstantin Modin<br/>Software Engineer:<br/>Web Development with React</p>
                    </div>
                </div>
                )
        }, 
        {
            name: 'tec',        
            caption: 'Technologies',
            kids: (
                <ul className="dropdown courses">
                    <li>React/Redux</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>SASS/LESS</li>
                </ul>
                )
        }, 
        {
            name: 'link',
            caption: 'Links',
            kids: (
                <ul className="dropdown dropdown3">
                    <li className="linkedin">LinkedIn</li>
                    <li className="git">GitHub</li>
                    <li className="insta">Instagram</li>
                    <li className="twitter">Twitter</li>
                    <li className="whatsapp">Whatsapp</li>                        
                </ul>
            )

        }
    ];
    const [ classes, setClasses ] = useState({about: '', tec: '', link: ''});
    const [ ddback, setDdback ] = useState('dropDownBackground');

    function handleEnter (e) {              
        e.persist();
        e.stopPropagation();
        console.log('Enter', this);
        console.dir(e);
        console.log('tarenter=', e.nativeEvent.relatedTarget);
       
    }
    function handleLeave(e) { 
        e.stopPropagation();
       console.log('Leave', this);
       console.log('tarleave', e.nativeEvent.relatedTarget);
    }
    
    return (
        <nav className="MenuDrop">
            <div className={ddback}>
                <span className="arrow">+</span>
            </div>
            <ul className="cool">
                {menuData.map(li=>(
                    <MenuItem 
                        name={li.name} 
                        key={li.name}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        liClass={'tar ' + li.name + ' ' + classes[li.name]}
                        caption={li.caption}>
                        {li.kids}                        
                    </MenuItem>
                    )
                )}
            </ul>
        </nav>
    )
}

export default Menu;
