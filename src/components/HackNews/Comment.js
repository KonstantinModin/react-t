import React from 'react';
import { useTimePassed, useAxios } from './hooks/hooks';
import ReactMarkdown from 'react-markdown';

const Comment = ({ id }) => {   

    const { by, kids, text, time, parent } = useAxios(id, 'comment');

    const timePassed = useTimePassed(time);

    return by ? (
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
