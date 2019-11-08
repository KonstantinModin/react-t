import React, { Component } from 'react';
import MyContext from '../../../context/';
import Element from './Element';
import Reciever from './Reciever';
import './Test.css';

class Test extends Component {
    // console.dir(props.children);

    // React.Children.map(props.children, item=>{console.log('item', item)});
    state = {
        dataForReciever: 'def value'
    };

    static contextType =  MyContext;

    handleClick = (event) => {
        const a = event.target;
        console.log(event.type);
        console.log(event.target);
        console.log(event.target.nodeName);

        setTimeout(()=>{
            console.log(event.type);
        },0)
    }    

    render(){
        return (
            <div className="Test">
                <div><h2>Test</h2></div>
                <button onClick={this.handleClick}>Event.type?</button>
                {/* <calendar-component active-date="2018-08-01" items='[{"date":"2018-08-08","subject":"Meeting"}, {"date":"2018-08-14","subject":"Dentist Appointment"}, {"date":"2018-08-24","subject":"Dinner with Friends"}]'></calendar-component> */}
                <Element />
                <div>My context = {this.context}</div>
                <input onChange={(e)=>this.setState({dataForReciever: e.target.value})} value={this.state.dataForReciever}/>
                <Reciever data={this.state.dataForReciever}/>
            </div>
        )
    }
}

export default Test;
