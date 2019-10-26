import React, { createRef, useState } from 'react';
import './VideoPlayer.css';
import vid from './3.mp4';

const VideoPlayer = () => {
    const video = createRef();
    const progressRef = createRef();

    const [playButton, setPlayButton] = useState('►');
    const [volume, setVolume] = useState(0.4);
    const [rate, setRate] = useState(1);
    const [progress, setProgress] = useState(0);    
    
    const togglePlay = () => {
        if (!video.current.webkitDisplayingFullscreen) {
            video.current.paused ? video.current.play() : video.current.pause();
        }
    }
    const handleVolume = ({ target: { value } }) => {    
        setVolume(value);
        video.current.volume = value;        
    }
    const handleRate = ({ target: { value } }) => {    
        setRate(value);
        video.current.playbackRate = value;        
    }
    const updateButton = () => {
        setPlayButton(video.current.paused ? '►' : '❚ ❚');
    }
    const skip = ({ target }) => {        
        video.current.currentTime += parseFloat(target.dataset.skip);
    }
    const handleProgress = () => {        
        setProgress(video.current.currentTime / video.current.duration * 100);
    }
    const scrub = (e) => {               
        video.current.currentTime = e.nativeEvent.offsetX / progressRef.current.offsetWidth * video.current.duration;        
    }
    const toggleFulscreen = () => {        
        if (video.current.mozRequestFullScreen) {
            video.current.mozRequestFullScreen();
        } else if (video.current.webkitRequestFullScreen) {
            video.current.webkitRequestFullScreen();
        }  
    }

    return (
        <div className="VideoPlayer">            
            <h1>Video Player</h1>
            <video 
                onClick={togglePlay} 
                onTimeUpdate={handleProgress}
                onPlay={updateButton} 
                onPause={updateButton} 
                className="videoPlayerView" 
                src={vid} 
                ref={video} 
                volume={volume}>
                    <h2>Your browser doesn't support HTML5 video</h2>
            </video>
            <div className="playerControls">
                <div className="progress" onClick={scrub} ref={progressRef}>
                    <div className="progressFilled" style={{'flexBasis':progress+'%'}}></div>
                </div>            
                <button className="playerButton Toggle" title="Toggle Play" onClick={togglePlay}>{playButton}</button>
                <input onChange={handleVolume} type="range" name="volume" className="playerSlider volume" min={0} max={1} step={0.05} value={volume}/>
                <input onChange={handleRate}type="range" name="playbackRate" className="playerSlider rate" min={0.5} max={5} step={0.1} value={rate}/>
                <button onClick={skip} data-skip={-5} className="playerButton">«« 5s</button>
                <button onClick={skip} data-skip={5} className="playerButton">5s »»</button>
                <button onClick={toggleFulscreen} className="playerButton">□</button>
            </div>      

        </div>
    )
}

export default VideoPlayer;
