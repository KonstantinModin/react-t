import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './ReduxFav/reducers/';
import ShowContext from './ShowContext';
import Hooks from './Hooks';
import ReduxFav from './ReduxFav';
import './Info.css';

const store = createStore(reducer);

const Info = () => (
    <div className="Info">
        <h1>Test</h1>
        <div className="grid">            
            <ShowContext />
            <Hooks />
            <Provider store={store}><ReduxFav /></Provider>                
        </div>
    </div>
)

export default Info;