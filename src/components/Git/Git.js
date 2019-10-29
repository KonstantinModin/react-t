import React, { Component } from 'react';
import axios from 'axios';
import './Git.css';

export default class Git extends Component {
    state = {
        list: {},
        loading: true,
        error: false
    };

    componentDidMount(){
        console.log('state :', this.state);
        axios.get('https://api.github.com/users/defunkt')
            .then(response => {
                console.log(response);
                this.setState({list: response.data, loading:false, error:false});
            })
            .catch(error => {
                console.error('We fucked up!', error);
                this.setState({error: true, loading:false});
            });
    };

    render() {
        const { list, loading, error } = this.state;

        const content = loading ? [['Loading...','']] :
              error ? [['Some fuckup hapened!</div>','']] :
              Object.entries(list);
        console.log('content :', content);

        return (
            <div className="GitHub">
                <h2>GitHub Issues (Classes) </h2>
                {content.map(([a,b],i)=><div key={a+i}><span>{a}</span>{b}</div>)}
            </div>
        )
    }
}
