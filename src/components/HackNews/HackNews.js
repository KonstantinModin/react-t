import React from 'react';
import { useAxios } from './hooks/hooks';
import ListItem from './ListItem';
import './HackNews.css';

const HackNews = ({ history, match }) => {    

    const page = parseInt(match.params.id);    

    const topStories = useAxios('','top');

    const content = topStories.length ? 
        (<>
            <div className="list">
                {topStories.slice((page-1)*10,page*10).map((storyId, i)=>
                    <ListItem 
                        key={storyId} 
                        id={storyId} 
                        pos={i+1+(page-1)*10+". "}
                        history={history}
                    />
                )}           
            </div>
            <div className="pagination"><span className="select">Select page:</span>            
                {[...Array(20)].map((_,i)=>                    
                    <span className={"page"+(i+1===page?" cur":"")} key={i} onClick={()=>history.push(`/hack/${i+1}`)}>{i+1}</span>
                )}
            </div>            
        </>) : (<div className="spinner"></div>)

    return (
        <div className="HackNews">
            <div className="topBar">
                <div><h4>Hacker News </h4><h5> Top stories</h5><h4> (Hooks, recursive comments with ReactMarkdown)</h4></div>
                <div><h6>Page: {page}</h6></div>
            </div>
            {content}
        </div>
    )
}

export default HackNews;