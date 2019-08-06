import React, { useEffect, useState } from 'react';
import './WebCam.css';

const WebCam = () => {
    const videoRef = React.createRef();
    const canvasRef = React.createRef();
    
    // const [ canvasSize, setCanvasSize ] = useState([320, 240]);
    
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(stream => {
                // console.log(stream);                
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                // requestAnimationFrame(paintToCanvas);
                
                // setCanvasSize([width, height]);
                
            })
            .catch(err => console.error('Ошибка!', err));
    };

    const paintToCanvas = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.height = height;
        canvas.width = width;

        // console.log(width, height);
        // console.log(canvasRef.current.getContext.toString());
        
        const ctx = canvas.getContext('2d');
        console.log('canvas.width', canvas.width);
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
            <div className="Upper">
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
                <video                 
                    className="Player"
                    ref={videoRef}
                />
                </div>
            <canvas 
                className="Photo" 
                // width={canvasSize[0]} 
                // height={canvasSize[1]} 
                ref={canvasRef}                
            />
            
            <div className="Strip"></div>
        </div>
    )
}

export default WebCam;
