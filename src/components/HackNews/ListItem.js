import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListItem = ({ id, pos, history }) => {
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
        const res = (url || '').match(/^https?:\/\/([^\/]*)/);        
        return (res || [])[1];
    }

    const timePassed = (time) => {
        const secondsPassed = Date.now()/1000 - time;        
        
        const arr =  secondsPassed < 60 ?    [secondsPassed, 'second'] :
                     secondsPassed < 3600 ?  [(secondsPassed / 60)|0, 'minute'] :
                     secondsPassed < 86400 ? [(secondsPassed / 3600)|0, 'hour'] : 
                                             [(secondsPassed / 86400)|0, 'day'] ;

        return arr.join` ` + (arr[0] > 1 ? 's' : '');
    }

    const getComments = (com) => {
        const number = (com || []).length;
        return ' ' + number + ' comment' + (number !== 1 ? 's' : '');
    }

    const { id: dataId, url, title, score, by, time, kids:comments } = data;
    console.log(history);
    return dataId ? (
        <div className="listItem">
            <div className="title" >
                <a href={url} target="_blank"><h4>{pos + ". " + title}</h4></a><span>{cutURL(url)}</span>
            </div>
            <div className="secondLine">
                {score} points | 
                by <span className="by">{by}</span> | 
                {" " + timePassed(time)} ago |
                <span onClick={()=>history.push(`/hack/${dataId}`)}>{getComments(comments)}</span>
            </div>
        </div>
    ) : <div>{spinner}</div>
}

export default ListItem;
