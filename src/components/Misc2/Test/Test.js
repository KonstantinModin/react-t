import React from 'react';
import './Test.css';

const Test = (props) => {
    console.dir(props.children);

    React.Children.map(props.children, item=>{console.log('item', item)});
    return (
        <div className="Test">
            <div><h2>Test</h2></div>
            <calendar-component active-date="2018-08-01" items='[{"date":"2018-08-08","subject":"Meeting"}, {"date":"2018-08-14","subject":"Dentist Appointment"}, {"date":"2018-08-24","subject":"Dinner with Friends"}]'></calendar-component>
        </div>
    )
}

export default Test;
