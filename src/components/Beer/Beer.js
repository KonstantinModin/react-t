import React, { useState, useEffect } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import { Route } from 'react-router-dom';
import Catalog from './Catalog';
import ItemPage from './ItemPage';
import './Beer.css';

const beerStore = createStore(
    reducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )            
);

const Beer = () => {
    const [ num, setNum ] = useState(0);
    const getSetNum = () => setNum(beerStore.getState().items.length);

    beerStore.subscribe(()=>getSetNum());

    useEffect(() => getSetNum(), []);

    return (
        <Provider store={beerStore}>
            <div className="beer">                                     
                <div className="mainTitle">
                    <h2>Infinite Scroll Beer Catalog</h2>
                    <h3>with redux, redux-thunk</h3>
                    <span> Items in catalog: {num} </span>
                </div>                
                <Route exact path="/beer/:id" render={({ match })=><ItemPage id={match.params.id} />}/>
                <Route exact path="/beer"><Catalog /></Route>
            </div>            
        </Provider>
    )
}

export default Beer;