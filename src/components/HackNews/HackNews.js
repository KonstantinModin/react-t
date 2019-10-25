import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import axios from 'axios';
import './HackNews.css';

{/* <span style={{ backgroundImage: `url(${src})` }} /> */}

const HackNews = () => {
    const [ topStories, setTopStories ] = useState([]);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(response=>{
                console.log(response);
                setTopStories(response.data);
            })
            .catch(error => console.error(error));
        
    },[]);

    const content = topStories.length ? 
        (<div className="list">
            {topStories.slice(0,10).map(storyId=><ListItem key={storyId} id={storyId}/>)}
        </div>) : (<div className="spinner"></div>)

    return (
        <div className="HackNews">
            <h4>HackNews</h4>
            {content}
        </div>
    )
}

export default HackNews;
