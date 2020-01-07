import React from 'react';
import Comment from './Comment';
import ListItem from './ListItem';

const Comments = ({ data, history }) => {    
    return (
        <div className="HackNews">
            <h2>Comments</h2>
            <div className="list scroll">
                <ListItem id={0} dataProps={data[0]} pos={''} history={history}/>
                {data[0].kids.map(id=><Comment key={id} id={id} />)}
            </div>
        </div>
    )
}

export default Comments
