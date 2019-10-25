import React, { useState, useEffect, useMemo } from 'react';
import * as UserApi from './usersApi';

const PersonInfo = ({ id }) => {
    const [ state, setState ] = useState({
        person: {},
        loaded: false
    });

    const fetchData = () => {
        if (state.loaded) setState({ person:{}, loaded:false });

        // console.log('props.id', id);
        UserApi.get(id).then((person)=>{
            // console.log('person=',person);
            if (person) setState({ person, loaded: true });
        })
    }

    useEffect(()=>{
        // console.log('effect person info');
        fetchData();
       // eslint-disable-next-line  
    },[ id ]);

    const [num, setNum] = useState(0);
   
    // const calcDer = n => {
    //     console.log('heavy computing');
    //     return n**3;
    // }

    const der = useMemo(()=>{
        console.log('heavy computing');
        return num**3;
    },[num]);
  
    if (!state.loaded) return (<div>
                                    <div>Loading person with ID of {id}...</div>
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>);

    
    return (
        <div>
            This person has ID of {id}
            <ul>
                <li>Name: {state.person.name}</li>
                <li>Id: {state.person.id}</li>
                <li>Age: {state.person.age}</li>
                <li onClick={() => setNum(num + 1)}>Num: {num}</li>
                <li>Der: {der}</li>
            </ul>
        </div>
    )
    
    
}

export default PersonInfo;
