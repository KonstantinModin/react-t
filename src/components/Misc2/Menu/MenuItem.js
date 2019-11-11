import React, { Component } from 'react';

class MenuItem extends Component {  

    render() {
        const { name, onMouseEnter, onMouseLeave, liClass, caption, children } = this.props;

        this.onMouseEnter = onMouseEnter.bind(this);
        this.onMouseLeave = onMouseLeave.bind(this);        

        return (
            <li 
                name={name} 
                onMouseEnter={this.onMouseEnter} 
                onMouseLeave={this.onMouseLeave} 
                className={liClass}>
                <a href="/" name={name} >{caption}</a>
                {children}
            </li>
        )
    }
}

export default MenuItem;