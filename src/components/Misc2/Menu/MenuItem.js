import React from 'react';

const MenuItem = ({name, onMouseEnter, onMouseLeave, liClass, caption, kids }) => {
    return (
        <li name={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={liClass}>
            <a href="/" name={name} >{caption}</a>
            {kids}
        </li>
    )
}

export default MenuItem;
