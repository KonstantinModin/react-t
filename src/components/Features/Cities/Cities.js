import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cities.css';

const Cities = () => {
    const [ cities, setCities ] = useState([]);
    const [ citiesFiltered, setCitiesFiltered ] = useState([]);
    const [ text, setText ] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
            const response = await axios(endpoint);
            setCities(response.data);            
        }
        getData();        
    },[]);

    const findMatches = (wordToMatch) => {
        const regex = RegExp(wordToMatch, 'gi');
        return wordToMatch.length ? cities.filter(a=>a.city.match(regex)||a.state.match(regex)) : [];
    }
    const handleInputChange = ({ target }) => {
        setText( target.value);
        setCitiesFiltered(findMatches(target.value));
    }
    const handleCityClick = (city, state) => {
        setText(`${city}, ${state}`);
        setCitiesFiltered([]);
    }

    return (
        <div className="Cities">
            <h3>Type some city in US</h3>
            <form className="search-form">
                <input onChange={handleInputChange} type="text" className="search" placeholder="City or State" value={text}/>
                <ul className="suggestions">
                    {citiesFiltered.map(a=>{
                        const regex = RegExp(text, 'gi');
                        const cityName = a.city.split(regex);
                        const stateName = a.state.split(regex);
                        return (
                            <li onClick={() => handleCityClick(a.city, a.state)}>
                                <span 
                                    className="name"
                                >
                                    {cityName[0]}<span className="hl">{cityName[1]&&text}</span>{cityName[1]},{' '} 
                                    {stateName[0]}<span className="hl">{stateName[1]&&text}</span>{stateName[1]}                                
                                </span>
                                <span className="population">{a.population.replace(/(\d)(?=(\d{3})+$)/g,'$1,')}</span>
                            </li>
                        )
                    })}
                </ul>
            </form>
        </div>
    )
}

export default Cities;