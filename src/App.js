import React, { Suspense, lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Back from './45621.jpg';
import Header from './components/Header';
import './App.css';
const Clock = lazy(() => import('./components/Clock'));
const Drums = lazy(() => import('./components/Drums'));
const WebCam = lazy(() => import('./components/WebCam'));
const Home = lazy(() => import('./components/Home'));
const Draw = lazy(() => import('./components/Draw'));
const Variables = lazy(() => import('./components/Variables'));
const Features = lazy(() => import('./components/Features'));
const Recognition = lazy(() => import('./components/Recognition'));
const SpeechSyn = lazy(() => import('./components/SpeechSyn'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
const Events = lazy(() => import('./components/Events'));

function App() {    
    console.log('%c CSS Styled console.log', 'color: red; font-size: 400%; text-shadow: 5px 5px 10px black');
    // console.dir(document);
    // console.dir(window);    

    return (
        <div className="App">        
            <Route path="/" component={Header} />

            <div className="Background" >
                <img src={Back} alt="background"/>
            </div>

            <div className="Container">                                     
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route exact path="/" component={Home} />        
                    <Route path="/clock" component={Clock} />
                    <Route path="/drums" component={Drums} />
                    <Route path="/webcam" component={WebCam} />
                    <Route path="/draw" component={Draw} />
                    <Route path="/variables" component={Variables} />
                    <Route path="/features" component={Features} />
                    <Route path="/recognition" component={Recognition} />
                    <Route path="/synthesis" component={SpeechSyn} />
                    <Route path="/videoplayer" component={VideoPlayer} />
                    <Route path="/events" component={Events} />
                    <Redirect to="/" />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
