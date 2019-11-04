import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(){
        this.setState({hasError:true});
    }

    render() {

        return this.state.hasError ? <div>Error Happend</div> : <div>{this.props.children}</div>
    }
}
