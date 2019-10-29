import React, { useState, useEffect } from 'react';
import PersonInfo from './PersonInfo';
import * as UserApi from './usersApi';

const Events = () => {
    const [ state, setState ] = useState({
        users: null,       
        loaded: false 
    });

    const [ selected, setSelected ] = useState(null);

    useEffect(()=>{
        console.log('effect Main');
        UserApi.all().then(users => {
            setState({ users, loaded:true });
        });
    },[]);  
    
    if (!state.loaded) return (<div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                               </div>);
    
    return (
        <div className="Fetch">
            <h4>With Hooks</h4>
                <ul>
                {state.users.map(({name, id})=>(
                    <li onClick={()=>setSelected(id)} 
                    key={id}
                    className={id===selected ? 'selected' : ''}>
                        Name:{name}
                    </li>)
                )}                    
            </ul>
                {!selected? <div>Please select person... </div>:<PersonInfo id={selected} />}                
        </div>
    )    
}

export default Events;

