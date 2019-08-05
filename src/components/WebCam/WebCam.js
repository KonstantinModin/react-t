import React, { useEffect, useState } from 'react';
import './WebCam.css';

const WebCam = () => {
    const videoRef = React.createRef();
    const canvasRef = React.createRef();
    
    const [ canvasSize, setCanvasSize ] = useState([320, 240]);
    
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(stream => {
                // console.log(stream);                
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                
            })
            .catch(err => console.error('Ошибка!', err));
    };

    const paintToCanvas = () => {
        const width = videoRef.current.videoWidth;
        const height = videoRef.current.videoHeight;
        setCanvasSize([width, height]);
        console.log(width, height);
        // console.log(canvasRef.current.getContext.toString());
        const ctx = canvasRef.current.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, width, height);
    };

    useEffect(() => {
        // console.log('videoRef :', videoRef);
        getVideo();
        // paintToCanvas();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="WebCam">
            <h1>WebCam</h1>
            <div className="Controls">
                <button type="button" className="btn btn-success" onClick={paintToCanvas}>Take Photo</button>
                <div className="RGB">
                    <label htmlFor="rmin">Red Min:</label>
                    <input type="range" min={0} max={255} name="rmin" />
                    <label htmlFor="rmax">Red Max:</label>
                    <input type="range" min={0} max={255} name="rmax" />
                    <br />
                    <label htmlFor="gmin">Green Min:</label>
                    <input type="range" min={0} max={255} name="gmin" />
                    <label htmlFor="gmax">Green Max:</label>
                    <input type="range" min={0} max={255} name="gmax" />
                    <br />
                    <label htmlFor="bmin">Blue Min:</label>
                    <input type="range" min={0} max={255} name="bmin" />
                    <label htmlFor="bmax">Blue Max:</label>
                    <input type="range" min={0} max={255} name="bmax" />
                    <br />
                </div>
            </div>
            <canvas className="Photo" width={canvasSize[0]} height={canvasSize[1]} ref={canvasRef}/>
            <video                 
                className="Player"
                ref={videoRef}
            />
            <div className="Strip"></div>
        </div>
    )
}

export default WebCam;
