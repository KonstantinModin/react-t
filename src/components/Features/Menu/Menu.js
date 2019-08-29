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
                        <p>Konstantin Modin Software Engineer: Web Development with React</p>
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
        // e.stopPropagation();
        console.dir(e);
        console.log('target.name', e.target.name);
        // console.log('this', this);
        console.dir(e.target);
        // if (target.dataSet.n) {
            // console.log('event.target.dname', target.data.daraSet.n)
            const newClasses = {...classes};
            newClasses[e.target.name] = 'trigger-enter';
            setClasses(newClasses);

            setTimeout(()=> {
                const newClasses = {...classes};
                newClasses[e.target.name] = 'trigger-enter trigger-enter-active';
                setClasses(newClasses);
            },150)
        // }
    }
    const handleLeave = (e) => {
        // console.dir('target.name=', target.name);
        console.dir(e);
        console.dir(e.target);
        const newClasses = {...classes};
        newClasses[e.target.name] = '';
        setClasses(newClasses);

    }
    
    return (
        <nav className="MenuDrop">
            <div className="dropDownBackground">
                <span>+</span>
            </div>
            <ul>
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
