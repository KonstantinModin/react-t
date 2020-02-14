import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = React.forwardRef((props, ref) => { 
    return (
        <div className="Home">
            <div><h1>Select any menu item provided above</h1></div>
            <div className="description">
                <div>
                    Type here some text then App.js will get it from ref provided with React.forawardRef
                    and then this text will be provided as a Context to entire App. 
                    You will be able to see it in <Link to="/test">Test section </Link> 
                    of this site.
                </div>                
                <input ref={ref} onChange={props.onInputClick} defaultValue={props.defaultValue}/>                
            </div>
        </div>
    )
});

export default Home;