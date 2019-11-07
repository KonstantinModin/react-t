import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ setSelected, id, selected, name }) => {
    
    const [ error, setError ] = useState(false);
    useEffect(()=>{
        if (error) {
            window.foo.bar = 'baz';
        }
    },[error])

    const throwMe = () => {
        setError(true);        
    }
    
    return (
        <li 
            onClick={()=>setSelected(id)}                            
            className={id===selected ? 'selected' : ''}>
            Name:{name}
            <button style={{marginLeft:'30px'}} onClick={throwMe}>Throw Error</button>
        </li>
    )
}

export default ListItem;

ListItem.propTypes = {
    setSelected: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    selected: PropTypes.number,
    name: PropTypes.string.isRequired
}