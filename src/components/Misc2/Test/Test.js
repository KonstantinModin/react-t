import React from 'react';
import Element from './Element';
import './Test.css';

const Test = (props) => {
    console.dir(props.children);

    React.Children.map(props.children, item=>{console.log('item', item)});

    const handleClick = (event) => {
        const a = event.target;
        console.log(event.type);
        console.log(event.target);
        console.log(a);

        setTimeout(()=>{
            console.log(event.type);
        },0)
    }

    return (
        <div className="Test">
            <div><h2>Test</h2></div>
            <button onClick={handleClick}>Event.type?</button>
            {/* <calendar-component active-date="2018-08-01" items='[{"date":"2018-08-08","subject":"Meeting"}, {"date":"2018-08-14","subject":"Dentist Appointment"}, {"date":"2018-08-24","subject":"Dinner with Friends"}]'></calendar-component> */}
            <Element />
        </div>
    )
}

export default Test;
