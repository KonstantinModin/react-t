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

    const handleEnter = (e) => {       
        console.dir(e.target);
        if (e.target.className.slice(0,3)==='tar') {
            console.log('hey');
            const newClasses = {about: '', tec: '', link: ''};
            newClasses[e.target.className.split` `[1]] = 'trigger-enter';
            setClasses(newClasses);
            setDdback('dropDownBackground open');

            setTimeout(()=> {
                const newClasses = {about: '', tec: '', link: ''};
                newClasses[e.target.className.split` `[1]] = 'trigger-enter trigger-enter-active';
                setClasses(newClasses);
            },150)
        }
        
    }
    const handleLeave = (e) => { 
        // console.dir(e.target);
        if (e.target.className.split` `[0] === 'dropdown') {
            setClasses({about: '', tec: '', link: ''});
            setDdback('dropDownBackground'); 
        }       
    }
    
    return (
        <nav className="MenuDrop">
            <div className={ddback}>
                <span>+</span>
            </div>
            <ul className="cool">
                {menuData.map(li=>(
                    <MenuItem 
                        name={li.name} 
                        key={li.name}
                        onMouseEnter={(e) => handleEnter(e.nativeEvent)}
                        onMouseLeave={(e) => handleLeave(e.nativeEvent)}
                        liClass={'tar ' + li.name + ' ' + classes[li.name]}
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
