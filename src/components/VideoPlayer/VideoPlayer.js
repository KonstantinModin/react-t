import React from 'react';
import './VideoPlayer.css';
import vid from './3.mp4';

const VideoPlayer = () => {
    
    return (
        <div className="VideoPlayer">
            <h1>Video Player</h1>
            <video className="videoPlayerView" src={vid} >
                    <h2>Your browser doesn't support HTML5 video</h2>
            </video>
            <div className="playerControls">
                <div className="progress">
                    <div className="progressFilled"></div>
                </div>            
                <button className="playerButton Toggle" title="Toggle Play">►</button>
                <input type="range" name="volume" className="playerSlider volume" min={0} max={1} step={0.05} value={1}/>
                <input type="range" name="playbackRate" className="playerSlider rate" min={0.5} max={2} step={0.1} value={1}/>
                <button data-skip={-5} className="playerButton">«« 5s</button>
                <button data-skip={5} className="playerButton">5s »»</button>
            </div>

        </div>
    )
}

export default VideoPlayer;
