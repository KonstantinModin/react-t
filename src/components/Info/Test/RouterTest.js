import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';

const RouterTest = () => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    console.log(history, location, params);
    
    return (
        <div className="RouterTest">
            Router
        </div>
    )
}

export default RouterTest;
