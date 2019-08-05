import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Clock from './components/Clock';
import Header from './components/Header';
import Drums from './components/Drums';
import WebCam from './components/WebCam';
import Home from './components/Home';
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
                <Route exact path="/" component={Home} />        
                <Route path="/clock" component={Clock} />
                <Route path="/drums" component={Drums} />
                <Route path="/webcam" component={WebCam} />
                <Redirect to="/" />
            </div>
        </div>
    );
}

export default App;
