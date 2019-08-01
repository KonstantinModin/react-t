import React from 'react';
import { Route } from 'react-router-dom';
import Clock from './components/Clock';
import Header from './components/Header';
import Drums from './components/Drums';
import Back from './45621.jpg';
import './App.css';

function App() {    

    return (
        <div className="App">        
            <Route path="/" component={Header} />

            <div className="Background" >
                <img src={Back} alt="background"/>
            </div>

            <div className="Container">            
                <Route exact path="/" render={() => <h2>Choose some menu item provided:</h2>} />        
                <Route path="/clock" component={Clock} />
                <Route path="/drums" component={Drums} />
            </div>
        </div>
    );
}

export default App;
