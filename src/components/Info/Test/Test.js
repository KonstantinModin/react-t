import React, { Component } from 'react';
import MyContext from '../../../context/';
import Element from './Element';
import Reciever from './Reciever';
import './Test.css';
import RouterTest from './RouterTest';

class Test extends Component {
    // console.dir(props.children);

    // React.Children.map(props.children, item=>{console.log('item', item)});
    state = {
        dataForReciever: 'def value'
    };

    static contextType =  MyContext;    

    handleClick = (event) => {
        const a = event.target;
        console.log(event);
        console.log(event.type);
        console.log(a);
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
                <Element />
                <div>My context = {this.context}</div>
                <input onChange={(e)=>this.setState({dataForReciever: e.target.value})} value={this.state.dataForReciever}/>
                <Reciever data={this.state.dataForReciever}/>
                <RouterTest/>
            </div>
        )
    }
}

export default Test;
