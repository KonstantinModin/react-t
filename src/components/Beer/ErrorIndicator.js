import React from "react";
import pict from './error-t.jpg';

const ErrorIndicator = ({ error: { stack, url, fakeError } }) => {
    return (
        <div className="errorIndicator">
            {fakeError && <h3>This is fake Error )</h3>}
            <img src={pict} alt="error" />
            <h3>Something went wrong!</h3>           
            <p>{stack}</p>            
            <p>URL: {url}</p>
        </div>
    );
};

export default ErrorIndicator;