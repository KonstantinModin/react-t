import React from 'react';
import { Route, NavLink, Switch, useLocation } from 'react-router-dom';
import List from './list/';
import './reduxFav.css';

const ReduxFav = () => {
    
    return (        
        <div className="ReduxFav">
            <h3>Redux Favorites</h3>
            <div className="navBar">
                <NavLink to="/info">List</NavLink>
                <NavLink to="/info/favorite">Favorite</NavLink>
            </div>
            <Switch>
                <Route path="/info/favorite"><List all={false} /></Route>
                <Route path="/info"><List all={true} /></Route>
            </Switch>
        </div>
        
    )
}

export default ReduxFav;
