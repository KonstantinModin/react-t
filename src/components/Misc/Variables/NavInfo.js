import React, { useEffect, useState } from 'react';

const NavInfo = () => {
    const { appCodeName, appName, appVersion,  language, userAgent, vendor, geolocation } = navigator;

    const [ position, setPosition ] = useState([0, 0]);
    
    useEffect(() => {    
        geolocation.getCurrentPosition((position) => {            
            setPosition([position.coords.latitude, position.coords.longitude]);
        });        
    // eslint-disable-next-line       
    }, []);

    return (
        <div className="Info">
            <div className="AccLabel">
                <h4>Your Browser Info:</h4>
            </div>                
            <div className="AccContent">
                <span>appCodeName: {appCodeName} </span>
                <span>appName: {appName}</span><br/>
                <span>appVersion: {appVersion}</span><br/>
                <span>userAgent: {userAgent}</span><br/>           
                <span>language: {language} </span>            
                <span>vendor: {vendor}</span><br/>
                <span>Geo position:</span><br/>
                <span>Latitude: {position[0].toFixed(7)} </span> <br/>
                <span>Longitude: {position[1].toFixed(7)}</span>
            </div>                
        </div>
    )
}

export default NavInfo;