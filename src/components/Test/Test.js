import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './ReduxFav/reducers/';
import ShowContext from './ShowContext';
import Hooks from './Hooks';
import ReduxFav from './ReduxFav';
import Cube from './Cube';
import './Test.css';

const store = createStore(reducer);

const Test = () => (
    <div className="Test">
        <h1>Test</h1>
        <div className="grid">            
            <ShowContext />
            <Hooks />
            <Provider store={store}><ReduxFav /></Provider>
            <div className="four">
                <Cube/>
                <Cube/>
                <Cube/>
                <Cube/>
            </div>               
        </div>
    </div>
)

export default Test;