import React, { Component } from 'react';
import PersonInfo from './PersonInfo';
import ErrorBoundary from './ErrorBoundary';
import ListItem from './ListItem';
import * as UserApi from './usersApi';
import './Fetch.css';

export default class Fetch extends Component {
    state = {
        users: null,
        selected: null,
        loaded: false 
    };

    componentDidMount(){        
        UserApi.all().then(users => {
            this.setState({users, loaded:true});
        });
    }    

    render() {
        const {users, selected, loaded} = this.state;
        if (!loaded) return (<div className="spinner-border text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>);
        
        return (
            <div className="Fetch"> 
                <h4>With Classes</h4>
                <ul>
                    {users.map(({name, id})=>
                        <ErrorBoundary key={id}>
                            <ListItem 
                                id={id} 
                                setSelected={()=>this.setState({selected:id})} 
                                selected={selected} 
                                name={name}/>   
                        </ErrorBoundary>
                    )}                    
                </ul>
                {!selected? <div>Please select person... </div>:<PersonInfo id={selected} />}                
            </div>
        )
    }
}

