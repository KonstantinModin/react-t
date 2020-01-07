import React from 'react';
import { Link } from 'react-router-dom';
import ClassComponent from './ClassComponent';
import HooksComponent from './HooksComponent';
import './ShowContext.css';

const ShowContext = () => ( 
    <div className="ShowContext">
        <h3>ShowContext</h3>        
        <header>You can update context in <Link to="/">Home Section</Link></header>        
        <HooksComponent />
        <ClassComponent />        
    </div>   
)

export default ShowContext;