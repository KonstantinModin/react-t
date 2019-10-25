import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListItem = ({ id }) => {
    const [ data, setData ] = useState({});
    useEffect(()=>{
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(({data}) => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error(error));
    },[id]);

    const spinner = <div className="spinner"></div>;

    const cutURL = (url) => {
        const res = (url||'').match(/^https?:\/\/([^\/]*)/);
        
        return (res||[])[1];
    }

    const timePassed = (time) => {
        const secondsPassed = Date.now()/1000 - time;        
        
        return secondsPassed < 60 ? (secondsPassed + ' sec') :
               secondsPassed < 3600 ? ((secondsPassed / 60)|0 + ' min'):
               secondsPassed < 86400 ? ((secondsPassed / 3600)|0 + ' hours') : 
               ((secondsPassed / 86400)|0 + ' days');

    }

    return data.id ? (
        <div className="listItem">
            <div className="title" >
                <a href={data.url} target="_blank"><h4>{data.title}</h4></a><span>{cutURL(data.url)}</span>
            </div>
            <div className="secondLine">
                {data.score} points | 
                by <span className="by">{data.by}</span> | 
                {" "+timePassed(data.time)} min ago |
                {" " + (data.kids||[]).length} comments
            </div>
        </div>
    ) : <div>{spinner}</div>
}

export default ListItem;
