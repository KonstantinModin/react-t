import React from 'react';
import Day from './Day';
import './Weather.css';

const data = [
    {id:18, date: '18-12-2025', caption: 'Mon', low: 16, high: 18, type: 'rain'},
    {id:19, date: '19-12-2025', caption: 'Tue', low: 20, high: 22, type: 'clouds'},
    {id:20, date: '20-12-2025', caption: 'Wed', low: 26, high: 28, type: 'sun'},
    {id:21, date: '21-12-2025', caption: 'Thr', low: 27, high: 29, type: 'sun'},
    {id:22, date: '22-12-2025', caption: 'Fri', low: 25, high: 27, type: 'clouds'},
    {id:23, date: '23-12-2025', caption: 'Sat', low: 24, high: 26, type: 'clouds'},
    {id:24, date: '24-12-2025', caption: 'San', low: 18, high: 20, type: 'rain'}
]

const Weather = ({ scroll }) => {
    

    return (
        <div className="Weather">
            <div className="title"><h3>Weather</h3><p>(Hardcoded data)</p></div>
            <div className="WeatherContainer">
                {data.map(({id, date, caption, low, high, type})=>
                    <Day key={id} date={date} caption={caption} low={low} high={high} type={type} scroll={scroll}/>
                )}
            </div>
        </div>
    )
}

export default Weather;
