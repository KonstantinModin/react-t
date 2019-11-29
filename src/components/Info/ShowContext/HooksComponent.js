import React, { useContext } from 'react';
import MyContext from '../../../context/';

const HooksComponent = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <h5>Hooks Component</h5>
            Here is context recieved from hook:
            <span>{ context }</span>
        </div>
    )
}

export default HooksComponent;