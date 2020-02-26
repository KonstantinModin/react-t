import React from 'react';
import Shadow from './Shadow';
import LinkEffect from './LinkEffect';
import Scroll from './Scroll';
import Cities from './Cities';
import Metronome from './Metronome';
import withCaption from './withCaption';
import './Features.css';

import Calc from './Calc';              //REDUX
import { createStore } from 'redux';    //REDUX
import { Provider } from 'react-redux'; //REDUX
import reducer from './Calc/reducer';   //REDUX
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );                                  //REDUX

const scrollStyle = {
    margin:'0 auto 0 auto',
    position: 'relative',
    top: '3rem'
};

const Features = () => {
    return (
        <div className="Features">
            <h1>Features</h1>                
            <div className="Grid">
                <Shadow />                                    
                <Cities />
                <LinkEffect />
                {withCaption(Scroll)('Slide me with mouse...', scrollStyle)}
                <Metronome />
                <Provider store={store}> {/* REDUX */}
                    <Calc />             {/* REDUX */}
                </Provider>              {/* REDUX */}
            </div>
        </div>
    )    
}

export default Features;