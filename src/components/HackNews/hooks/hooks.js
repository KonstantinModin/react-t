import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTimePassed = (time) => {
    const secondsPassed = Date.now()/1000 - time;        
    
    const arr =  secondsPassed < 60 ?    [secondsPassed, 'second'] :
                 secondsPassed < 3600 ?  [(secondsPassed / 60)|0, 'minute'] :
                 secondsPassed < 86400 ? [(secondsPassed / 3600)|0, 'hour'] : 
                                         [(secondsPassed / 86400)|0, 'day'] ;

    return arr.join` ` + (arr[0] > 1 ? 's' : '');
};

export const useAxios = (id, type, shouldFetch=true) => { 

    const [ data, setData ] = useState({});
    
    useEffect(()=>{
        const urls = {
            top: 'https://hacker-news.firebaseio.com/v0/topstories',
            story: 'https://hacker-news.firebaseio.com/v0/item/',
            comment: 'https://hacker-news.firebaseio.com/v0/item/'
        }        
        
        if (shouldFetch) {
            axios.get(`${urls[type]}${id}.json?print=pretty`)
            .then(response=>{
                // console.log('useAxios hook response', response);
                setData(response.data);
            })
            .catch(error=>console.error(error));
        }
            
    }, [id, type, shouldFetch]);

    return data;
}