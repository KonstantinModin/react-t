import React, { useState, useRef } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = () => {
    const aboutRef = useRef();
    const tecRef = useRef();
    const linkRef = useRef();
    
    const navRef = useRef();
    const backRef = useRef();

    const refObject = {about: aboutRef, tec: tecRef, link: linkRef} 
    
    const menuData = [
        {
            name: 'about',             
            caption: 'Author',
            kids: (
                <ul className="dropdown dropdown1" ref={aboutRef}>
                    <div className="bio">
                        <img 
                            src="https://avatars2.githubusercontent.com/u/45493372?s=460&v=4" 
                            width={80} 
                            height={80} 
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
                <ul className="dropdown courses" ref={tecRef}>
                    <li>React/Redux</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>HTML5/CSS3</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Webpack</li>
                    <li>Jest/Enzyme</li>
                </ul>
                )
        }, 
        {
            name: 'link',
            caption: 'Links',
            kids: (
                <ul className="dropdown dropdown3" ref={linkRef}>
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
        setClasses(classes=>{
            const newObject = {...classes};
            newObject[this.props.name] = ' trigger-enter';
            return newObject;
        });
        setTimeout(()=>{           
            setClasses(classes=>{
                const newObject = {...classes};
                if (classes[this.props.name]===' trigger-enter') {
                    newObject[this.props.name] += ' trigger-enter-active';
                }
                return newObject;
            }); 
            
        },100)
        setDdback('dropDownBackground open');        
        
        setTimeout(()=>{            
            const dropdownCoords = refObject[this.props.name].current.getBoundingClientRect();            
            const navCoords = navRef.current.getBoundingClientRect();
            const coords = {
                height: dropdownCoords.height,
                width: dropdownCoords.width,
                left: dropdownCoords.left-navCoords.left,
                top: dropdownCoords.top-navCoords.top
            };
            backRef.current.style.setProperty('width', `${coords.width}px`);
            backRef.current.style.setProperty('height', `${coords.height}px`);
            backRef.current.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);           

        },120)
       
    }
    function handleLeave(e) {
       setClasses({about: '', tec: '', link: ''});
       setDdback('dropDownBackground');
    }
    
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <h3>About me...</h3>
            <nav className="MenuDrop" ref={navRef}>            
                <div className={ddback} ref={backRef}>
                    <span className="arrow"></span>
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
        </div>
    )
}

export default Menu;
