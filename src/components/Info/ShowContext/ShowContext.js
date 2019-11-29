import React from 'react';
import ClassComponent from './ClassComponent';
import HooksComponent from './HooksComponent';
import './ShowContext.css';

const ShowContext = () => ( 
    <div className="ShowContext">
        <h3>ShowContext</h3>
        {/* <div className="table"> */}
            <HooksComponent />
            <ClassComponent />        
        {/* </div>     */}
    </div>   
)

export default ShowContext;