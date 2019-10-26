import React, { Component } from 'react';
import axios from 'axios';
import './Git.css';

export default class Git extends Component {
    state = {
        list: [],
        loading: true,
        error: false
    };

    componentDidMount(){
        console.log('state :', this.state);
        axios.get('https://api.github.com/resource?page=1')
            .then(response => {
                console.log(response);
                this.setState({list: response});
            })
            .catch(error => console.error('We fucked up!', error));
    };

    render() {
        const { list, loading, error } = this.state;

        return (
            <div className="GitHub">
                <h2>GitHub Issues (Classes) </h2>
                
            </div>
        )
    }
}
