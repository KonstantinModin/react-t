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

    return data.id ? (
        <div className="listItem">
            <div className="title" >
                <a href={data.url} target="_blank">{data.title}</a>
                <label>{data.url}</label>
            </div>
            <div className="secondLine">
                {data.score} points by {data.by} {((Date.now()/1000-data.time)/60)|0} min ago
            </div>
        </div>
    ) : <div>{spinner}</div>
}

export default ListItem;
