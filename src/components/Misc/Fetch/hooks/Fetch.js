import React, { useState, useEffect } from 'react';
import PersonInfo from './PersonInfo';
import * as UserApi from './usersApi';
import ErrorBoundary from './ErrorBoundary';
import ListItem from './ListItem';

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
                    <ErrorBoundary key={id}>
                        <ListItem                             
                            id={id} 
                            setSelected={setSelected} 
                            selected={selected} 
                            name={name}/>   
                    </ErrorBoundary>)
                )}                    
            </ul>
            {!selected? <div>Please select person... </div>:<PersonInfo id={selected} />}                
        </div>
    )    
}

export default Events;

