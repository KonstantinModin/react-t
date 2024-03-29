import React, { useEffect, useState } from 'react';
import snap from './snap.wav';
import './WebCam.css';

const WebCam = () => {
    const videoRef = React.createRef();
    const canvasRef = React.createRef();
    
    const [ snapShots, setSnapShots ] = useState([]);
    const [ effect, setEffect ] = useState('');
    const [ greenScreenParameters, setGreenScreenParameters ] = useState({
        rmin: 0,
        rmax: 80,
        gmin: 0,
        gmax: 80,
        bmin: 0,
        bmax: 80
    });

    let _global_stream = null;
    
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then(stream => {                
                _global_stream = stream;
                videoRef.current.srcObject = _global_stream;
                videoRef.current.play(); 
            })
            .catch(err => {});
        videoRef.current.addEventListener('canplay', paintToCanvas);        
    };    

    const paintToCanvas = () => {         
        const canvas = canvasRef.current;
        const video = videoRef.current;        

        if (!video) return;

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.height = height;
        canvas.width = width;       
        
        const ctx = canvas.getContext('2d');       
        ctx.drawImage(video, 0, 0, width, height);        
        
        let pixels;
        try {
            pixels = ctx.getImageData(0, 0, width, height);
        } catch(error) {
            console.error('Ошибка в CTX', error);
        }

        switch (effect) {
            case 'red': colorEffect(pixels, 90, -20, 0);
            break;
            case 'green': colorEffect(pixels, 0, 50, 0);
            break;
            case 'blue': colorEffect(pixels, 0, -50, 100);
            break;
            case 'split': rgbSplit(pixels);
            break;
            case 'greenScreen': greenScreen(pixels);
            break;
            default: break;
        }         
        
        if (pixels) ctx.putImageData(pixels, 0, 0);
        requestAnimationFrame(paintToCanvas);       
    };

    const colorEffect = (pixels, R, G, B) => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i + 0] = pixels.data[i + 0] + R;
            pixels.data[i + 1] = pixels.data[i + 1] + G;
            pixels.data[i + 2] = pixels.data[i + 2] + B;
        }
        return pixels;
    };

    const rgbSplit = (pixels) => {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i - 150] = pixels.data[i + 0];
            pixels.data[i + 500] = pixels.data[i + 1];
            pixels.data[i - 500] = pixels.data[i + 2];
        }
        return pixels;
    };
    
    const greenScreen = (pixels) => {
        if (!pixels) return
        const { rmin, rmax, gmax, gmin, bmax, bmin } = greenScreenParameters;
        for (let i = 0; i < pixels.data.length; i += 4) {
            const red = pixels.data[i + 0];
            const green = pixels.data[i + 1];
            const blue = pixels.data[i + 2];
            if (red >= rmin && green >= gmin && blue >= bmin &&
                red <= rmax && green <= gmax && blue <= bmax ) {
                    pixels.data[i + 3] = 0;
                }
        }
        return pixels;
    };

    const takePhoto = () => {
        const sound = new Audio(snap);
        sound.currentTime = 0;
        sound.play();
        const data = canvasRef.current.toDataURL('image/jpeg');
       
        const newElement = {
            name: new Date().toString().slice(4,21),
            data: data            
        };
        const newSnapShots = [...snapShots, newElement];
        setSnapShots(newSnapShots);
        // console.log('newSnapShots :', newSnapShots);
    };

    useEffect(() => {       
        getVideo();
        return () => {
            if (_global_stream) _global_stream.getTracks()[0].stop();
        }
        // eslint-disable-next-line
    });

    const inputHandler = ({target: {name, value}}) => {        
        const newParameters = {...greenScreenParameters};
        newParameters[name] = value;
        setGreenScreenParameters(newParameters);
    };

    const { rmin, rmax, gmax, gmin, bmax, bmin } = greenScreenParameters;

    return (      

        <div className="WebCam">
            <h1>WebCam</h1>
            <div className="Upper">
                <div className="Controls">                    
                    <button type="button" className="btn btn-success" onClick={takePhoto}>Take Photo</button>
                    <button className="btn btn-success" onClick={() => setEffect('greenScreen')}>Green Screen</button>
                    <button className="btn btn-success" onClick={() => setEffect('red')}>Red</button>
                    <button className="btn btn-success" onClick={() => setEffect('green')}>Green</button>
                    <button className="btn btn-success" onClick={() => setEffect('blue')}>Blue</button>
                    <button className="btn btn-success" onClick={() => setEffect('split')}>Split</button>
                    <button className="btn btn-success" onClick={() => setEffect('')}>Norm</button>
                    <div className="RGB">
                        <label htmlFor="rmin">Red Min: {rmin}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="rmin" value={greenScreenParameters.rmin} />
                        <label htmlFor="rmax">Red Max: {rmax}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="rmax" value={greenScreenParameters.rmax} />
                        <br />
                        <label htmlFor="gmin">Green Min: {gmin}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="gmin" value={greenScreenParameters.gmin} />
                        <label htmlFor="gmax">Green Max: {gmax}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="gmax" value={greenScreenParameters.gmax}/>
                        <br />
                        <label htmlFor="bmin">Blue Min: {bmin}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="bmin" value={greenScreenParameters.bmin}/>
                        <label htmlFor="bmax">Blue Max: {bmax}</label>
                        <input onChange={inputHandler} type="range" min={0} max={255} name="bmax" value={greenScreenParameters.bmax}/>
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
                ref={canvasRef}                
            />
            
            <div className="Strip">{
                snapShots.map(({ data, name }) => {
                    return (
                        <a 
                            href={data} 
                            download={`photo${name}`}                           
                            ><img src={data} alt="SnapShot" />{name}</a>
                        )
                })}
            </div>
        </div>
    )}

export default WebCam;