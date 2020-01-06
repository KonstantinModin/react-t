import React, { Component } from 'react';
import MyContext from '../../../context';

export default class ClassComponent extends Component {   
    
    static contextType = MyContext;

    // __SOME_CLASS_VARIABLE = 2;
    
    render() {
        return (
            <div>
                <h4>This is class-based component</h4>                
                {/* <div>{this.__SOME_CLASS_VARIABLE}</div> */}
                Here is context from static contextType:
                <span>{this.context}</span>
            </div>
        )
    }
}
