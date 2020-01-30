import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import Catalog from './Catalog';
import './Beer.css';

const beerStore = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )            
);

const Beer = () => { 
    return (
        <Provider store={beerStore}>                       
            <div className="beer">
                <div className="mainTitle">
                    <h2>Beer Catalog</h2>
                    <h3>with redux, redux-thunk</h3>
                </div>                
                <Catalog />
            </div>            
        </Provider>
    )
}

export default Beer;