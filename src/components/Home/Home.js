import React from 'react';
import './Home.css';

const Home = React.forwardRef((props, ref) => {
    return (
        <div className="Home">
            <div><h1 className="Home">Select any menu item provided above</h1></div>
            <div>
                <div>Type here some text which will be forwarded to App.js with React.forawardRef 
                and then will be provided as a Context to whole App.
                </div>
                <input ref={ref} onChange={props.onInputClick} defaultValue={props.defaultValue}/>

            </div>
        </div>
    )
});

export default Home;
