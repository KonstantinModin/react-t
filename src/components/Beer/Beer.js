import React, { useEffect } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import axios from 'axios';
import Catalog from './Catalog';
import './Beer.css';

const beerStore = createStore(
    reducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunkMiddleware)
    )            
);

const Beer = () => { 
    return (
        <Provider store={beerStore}>                       
            <div className="beer">
                <h2>Beer here</h2>                
                <Catalog />
            </div>            
        </Provider>
    )
}

export default Beer;