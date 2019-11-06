import React from 'react';
import { useTimePassed, useAxios } from './hooks/hooks';
import PropTypes from 'prop-types';

const ListItem = ({ id, pos, history, dataProps }) => {    

    let data = useAxios(id, 'story', !dataProps);    
    if (dataProps) data = dataProps;

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
                <span onClick={()=>history.push(`/hack/comments/${dataId}`, [data])}>{getComments(comments)}</span>
            </div>
        </div>
    ) : <div>{spinner}</div>
}

export default ListItem;

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    pos: PropTypes.string,
    history: PropTypes.object,
    dataProps: PropTypes.object
};