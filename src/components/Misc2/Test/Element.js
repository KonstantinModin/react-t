import React, { Component } from 'react';
import MyContext from '../../../context/';


export default class Element extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    static contextType = MyContext;
    _a = 2;

    handleClick(){}
    
    render() {        
        console.log(this.contextType, this, this._a, this.handleClick);

        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <h4>This is class-based component</h4>                
                <div>{this._a}</div>
                <div>Context in class from static: {this.context}</div>
            </div>
        )
    }
}
