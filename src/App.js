import React, { Suspense, lazy, Profiler } from 'react';
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
const Game = lazy(() => import('./components/Game'));
const Misc = lazy(() => import('./components/Misc'));
const HackNews = lazy(() => import('./components/HackNews'));
const Git = lazy(() => import('./components/Git'));

function App() {    
    // console.log('%c CSS Styled console.log', 'color: red; font-size: 400%; text-shadow: 5px 5px 10px black');
    // console.dir(document);
    // console.dir(window);    
    // console.log(Clock);      
    const onRenderCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) => {
        // console.table({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions});
    }
    
    return (
        <Profiler id="App" onRender={onRenderCallback}>
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
                    <Route path="/game" component={Game} />
                    <Route path="/misc" component={Misc} />
                    <Route path="/git" component={Git} />
                    <Route path="/hack" component={HackNews} />
                    <Route path="/hack/:id" render={({ match }) => {
                                            const { id } = match.params;                                        
                                            return <div item={id}>Comment{id}</div> 
                                        }} />
                    <Redirect to="/" />
                </Suspense>
            </div>        
        </div>
        </Profiler>
    );
}

export default App;