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
            <div className="pagination"><span className="select">Select page:</span>            
                {[...Array(20)].map((_,i)=>
                    <span className="page" key={i} onClick={()=>setPage(i+1)}>{i+1}</span>
                )}
            </div>
        </>) : (<div className="spinner"></div>)

    return (
        <div className="HackNews">
            <div className="topBar">
                <div><h4>Hacker News </h4><h5> Top stories</h5></div>
                <div><h5>Page: {page}</h5></div>
            </div>
            {content}
        </div>
    )
}

export default HackNews;
