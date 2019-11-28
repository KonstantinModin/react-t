import React from 'react';
import { Route, Link } from 'react-router-dom';
import List from './list/';
import './reduxFav.css';

const ReduxFav = () => {    
    return (        
        <div className="reduxFav">
            <h3>Redux Favorites</h3>
            <div className="navBar">
                <Link to="/info">List</Link>
                <Link to="/info/favorite">Favorite</Link>
            </div>            
            <Route path="/info/favorite"><List all={false} /></Route>
            <Route exact path="/info"><List all={true} /></Route>           
        </div>        
    )
}

export default ReduxFav;
