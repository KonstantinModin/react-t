import React, { useEffect, useState } from 'react';
import snap from './snap.wav';
import './WebCam.css';

const WebCam = () => {
    const videoRef = React.createRef();
    const canvasRef = React.createRef();
    
    const [ snapShots, setSnapShots ] = useState([]);
    const [ globalStream, setGlobalStream ] = useState(null);
    
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(stream => {
                // console.log(stream);
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                // setGlobalStream(stream);                
                // requestAnimationFrame(paintToCanvas);
                
                // setCanvasSize([width, height]);
                
            })
            .catch(err => console.error('Ошибка!', err));
        videoRef.current.addEventListener('canplay', paintToCanvas);
        console.log('navigator.mediaDevices', navigator.mediaDevices);
    };

    const paintToCanvas = () => {        
        // console.log('paint');
        const canvas = canvasRef.current;
        const video = videoRef.current;
        // console.log(video.readyState);

        if (!video) return

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.height = height;
        canvas.width = width;

        // console.log(width, height);
        // console.log(canvasRef.current.getContext.toString());
        
        const ctx = canvas.getContext('2d');
        // console.log('canvas.width', canvas.width);
        ctx.drawImage(videoRef.current, 0, 0, width, height);
        requestAnimationFrame(paintToCanvas);
       
    };

    const takePhoto = () => {
        const sound = new Audio(snap);
        sound.currentTime = 0;
        sound.play();
        const data = canvasRef.current.toDataURL('image/jpeg');
        // console.log('data :', data);
        const newElement = {
            name: new Date().toString().slice(4,21),
            data: data            
        };
        const newSnapShots = [...snapShots, newElement]
        setSnapShots(newSnapShots);
        console.log('newSnapShots :', newSnapShots);
    }

    useEffect(() => {       
        getVideo();
        return () => {
            // videoRef.current.stop();
            // console.log('globalStream', globalStream);
            // globalStream.stop();
            // videoRef.current.removeEventListener('canplay', paintToCanvas);
            // videoRef.current.srcObject.stop();
            // // if (this.stream.getVideoTracks && this.stream.getAudioTracks) {
            // //     this.stream.getVideoTracks().map(track => track.stop());
            // //     this.stream.getAudioTracks().map(track => track.stop());
            // //   } else {
            // //     this.stream.stop();
            // //   }
        }
        // eslint-disable-next-line
    });

    return (      

        <div className="WebCam">
            <h1>WebCam</h1>
            <div className="Upper">
                <div className="Controls">
                    <button type="button" className="btn btn-success" onClick={paintToCanvas}>Start Canvas</button>
                    <button type="button" className="btn btn-success" onClick={takePhoto}>Take Photo</button>
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
            
            <div className="Strip">{
                snapShots.map(({ data, name }) => {
                    return (
                        <a 
                            href={data} 
                            download={`photo${name}`}
                            // innerHTML=
                            ><img src={data} alt="SnapShot" />{name}</a>
                        )
                })}
            </div>
        </div>
    )
}

export default WebCam;
