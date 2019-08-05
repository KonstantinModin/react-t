import React from 'react';
import './WebCam.css';

const WebCam = () => {
    return (
        <div className="WebCam">
            <h1>WebCam</h1>
            <div className="Controls">
                <button type="button" className="btn btn-success">Take Photo</button>
                <div className="RGB">
                    <label for="rmin">Red Min:</label>
                    <input type="range" min={0} max={255} name="rmin" />
                    <label for="rmax">Red Max:</label>
                    <input type="range" min={0} max={255} name="rmax" />
                    <br />
                    <label for="gmin">Green Min:</label>
                    <input type="range" min={0} max={255} name="gmin" />
                    <label for="gmax">Green Max:</label>
                    <input type="range" min={0} max={255} name="gmax" />
                    <br />
                    <label for="bmin">Blue Min:</label>
                    <input type="range" min={0} max={255} name="bmin" />
                    <label for="bmax">Blue Max:</label>
                    <input type="range" min={0} max={255} name="bmax" />
                    <br />
                </div>
            </div>
            <canvas className="Photo"></canvas>
            <video className="Player"></video>
            <div className="Strip"></div>
        </div>
    )
}

export default WebCam;
