import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import axios from 'axios';
import './HackNews.css';

{/* <span style={{ backgroundImage: `url(${src})` }} /> */}

const HackNews = () => {
    const [ topStories, setTopStories ] = useState([]);
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(response=>{
                console.log(response);
                setTopStories(response.data);
            })
            .catch(error => console.error(error));
        
    },[]);

    const content = topStories.length ? 
        (<>
            <div className="list">
                {topStories.slice((page-1)*13,page*13).map(storyId=><ListItem key={storyId} id={storyId}/>)}           
            </div>
            <div className="pagination">            
                {[...Array(10)].map((_,i)=>
                    <span className="page" key={i} onClick={()=>setPage(i+1)}>{i+1}</span>
                )}
            </div>
        </>) : (<div className="spinner"></div>)

    return (
        <div className="HackNews">
            <div><h4>HackNews </h4><h5> Top stories: page {page}</h5></div>
            {content}
        </div>
    )
}

export default HackNews;
