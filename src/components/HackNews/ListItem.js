import React, { useState, useEffect } from 'react';
import { useTimePassed } from './hooks/hooks';
import axios from 'axios';

const ListItem = ({ id, pos, history, dataProps }) => {
    const [ data, setData ] = useState({});
    useEffect(()=>{
        // console.log('history :', history);
        if (!dataProps) {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(({data}) => {
                // console.log(data);
                setData(data);
            })
            .catch(error => console.error(error));
        } else {
            setData(dataProps);
        }
    },[id, dataProps]);

    const spinner = <div className="spinner"></div>;

    const cutURL = (url) => {
        const res = (url || '').match(/^https?:\/\/([^/]*)/);        
        return (res || [])[1];
    }  
    
    const getComments = (com) => {
        const number = (com || []).length;
        return ' ' + number + ' comment' + (number !== 1 ? 's' : '');
    }
    
    const { id: dataId, url, title, score, by, time, kids:comments } = data;
    const timePassed = useTimePassed(time);
    
    return dataId ? (
        <div className="listItem">
            <div className="title" >
                <a 
                    href={url} 
                    target="_blank"
                    rel="noopener noreferrer">
                        <h4>{pos + title}</h4>
                </a>
                <span>
                    <a 
                    href={url} 
                    target="_blank"
                    rel="noopener noreferrer">
                    {cutURL(url)}
                    </a>
                </span>
            </div>
            <div className="secondLine">
                {score} points | 
                by <span className="by">{by}</span> | 
                {" " + timePassed} ago |
                <span onClick={()=>history.push(`/hack/${dataId}`, [data])}>{getComments(comments)}</span>
            </div>
        </div>
    ) : <div>{spinner}</div>
}

export default ListItem;
