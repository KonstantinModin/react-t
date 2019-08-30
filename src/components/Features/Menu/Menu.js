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
                        <img src="https://avatars2.githubusercontent.com/u/45493372?s=460&v=4" width={80}/>
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
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Whatsapp</li>                        
                </ul>
            )

        }
    ];
    const [ classes, setClasses ] = useState({about: '', tec: '', link: ''});

    const handleEnter = (e) => {       
        if (e.target.name) {
            const newClasses = {about: '', tec: '', link: ''};
            newClasses[e.target.name] = 'trigger-enter';
            setClasses(newClasses);

            setTimeout(()=> {
                const newClasses = {about: '', tec: '', link: ''};
                newClasses[e.target.name] = 'trigger-enter trigger-enter-active';
                setClasses(newClasses);
            },150)
        }
        
    }
    const handleLeave = (e) => {                   
        setClasses({about: '', tec: '', link: ''});        
    }
    
    return (
        <nav className="MenuDrop">
            <div className="dropDownBackground">
                <span>+</span>
            </div>
            <ul className="cool">
                {menuData.map(li=>(
                    <MenuItem 
                        name={li.name} 
                        key={li.name}
                        onMouseEnter={(e) => handleEnter(e.nativeEvent)}
                        onMouseLeave={(e) => handleLeave(e.nativeEvent)}
                        liClass={classes[li.name]}
                        caption={li.caption}
                        kids={li.kids}
                        />
                    )
                )}
            </ul>
        </nav>
    )
}

export default Menu;
