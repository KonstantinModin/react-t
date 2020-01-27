import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import axios from 'axios';
import Catalog from './Catalog';
import './Beer.css';

const beerStore = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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