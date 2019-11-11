import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
    const menuData = [
        {
            name: 'about',             
            caption: 'About',
            kids: (
                <ul className="dropdown dropdown1">
                    <div className="bio">
                        <img 
                            src="https://avatars2.githubusercontent.com/u/45493372?s=460&v=4" 
                            width={80} 
                            alt="avatar"/>
                        <p>Konstantin Modin<br/>Software Engineer:<br/>Web Development with React</p>
                    </div>
                </ul>
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
       
        console.log(this.props.name);
        setClasses(classes=>{
            const newObject = {...classes};
            newObject[this.props.name] = ' trigger-enter';
            return newObject;
        });
        setTimeout(()=>{
            setClasses(classes=>{
                const newObject = {...classes};
                newObject[this.props.name] += ' trigger-enter-active';
                return newObject;
            }); 
        },150)
       
    }
    function handleLeave(e) { 
       
       console.log('Leave this=', this.props.name);
       setClasses({about: '', tec: '', link: ''});
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
                        liClass={li.name + classes[li.name]}
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
