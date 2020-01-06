import React, { useContext } from 'react';
import MyContext from '../../../context/';

const HooksComponent = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <h4>Hooks Component</h4>
            Here is context recieved from useContext hook:
            <span>{ context }</span>
        </div>
    )
}

export default HooksComponent;