import React, { useState, useEffect } from 'react';

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
