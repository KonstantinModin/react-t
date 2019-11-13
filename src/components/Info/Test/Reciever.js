import React, { Component } from 'react';

class Reciever extends Component {
    render() {
        return (
            <div>
                <h5>I am reciever</h5>
                <div>I recieved data: {this.props.data}</div>
            </div>
        )
    }
}

export default Reciever;
