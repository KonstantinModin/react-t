import React from 'react';
import { Route, Link } from 'react-router-dom';
import List from './list/';
import './reduxFav.css';

const ReduxFav = () => {    
    return (        
        <div className="reduxFav">
            <h3>Redux Favorites</h3>
            <div className="navBar">
                <Link to="/test">List</Link>
                <Link to="/test/favorite">Favorite</Link>
            </div>            
            <Route path="/test/favorite"><List all={false} /></Route>
            <Route exact path="/test"><List all={true} /></Route>           
        </div>        
    )
}

export default ReduxFav;
