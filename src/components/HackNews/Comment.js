import React from 'react';
import PropTypes from 'prop-types';
import { useTimePassed, useAxios } from './hooks/hooks';
import ReactMarkdown from 'react-markdown';

const Comment = ({ id }) => {      
    
    const { by, kids, text, time, parent, type, deleted } = useAxios(id, 'comment') || {};

    const timePassed = useTimePassed(time);

    return deleted ? null :
        type ? (
        <div className="Comment">
            <div className="title">This is comment #:{id}, my parent is: {parent}</div>
            <div className="time">Posted {timePassed} ago.</div>
            <div className="author">Author: <span>{by}</span></div>
            <div className="text"><ReactMarkdown source={text} escapeHtml={false}/></div>
            {!!kids && <div>Comments of this comment:</div>}
            {!!kids && kids.map(comment=><Comment key={comment} id={comment}/>)}
        </div>
    ) : <div className="spinner"></div>
}

export default Comment;

Comment.propTypes = {
    id: PropTypes.number.isRequired
};