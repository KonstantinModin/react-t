import React from 'react';
import './Test.css';

const Test = (props) => {
    console.dir(props.children);

    React.Children.map(props.children, item=>{console.log('item', item)});
    return (
        <div className="Test">
            <div><h2>Test</h2></div>
        </div>
    )
}

export default Test;
