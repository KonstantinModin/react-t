import React from 'react';

const MenuItem = ({name, onMouseEnter, onMouseLeave, liClass, caption, kids }) => {
    return (
        <li name={name} onMouseOver={onMouseEnter} onMouseOut={onMouseLeave} className={liClass}>
            <a name={name} href="#">{caption}</a>
            {kids}
        </li>
    )
}

export default MenuItem;
