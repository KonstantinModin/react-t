import React, { Component } from 'react';

class MenuItem extends Component {
    

    render() {
        const { name, onMouseEnter, onMouseLeave, liClass, caption, children } = this.props;

        this.onMouseEnter = onMouseEnter.bind(this);
        this.onMouseLeave = onMouseLeave.bind(this);
        console.log(this);

        return (
            <li 
                name={name} 
                onMouseEnter={(e) => this.onMouseEnter(e)} 
                onMouseLeave={(e) => this.onMouseLeave(e)} 
                className={liClass}>
                <a href="/" name={name} >{caption}</a>
                {children}
            </li>
        )
    }
}

export default MenuItem;
