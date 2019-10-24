import React, { Component } from 'react';
import PersonInfo from './PersonInfo';
import * as UserApi from './usersApi';
import './Events.css';

export default class Events extends Component {
    state = {
        users: null,
        selected: null,
        loaded: false 
    };

    componentDidMount(){
        console.log('componentDidMount Main');
        UserApi.all().then(users => {
            this.setState({users, loaded:true});
        });
    }    

    render() {
        const {users, selected, loaded} = this.state;
        if (!loaded) return <div>Loading...</div>
        
        return (
            <div> 
                <h4>With Classes</h4>
                 <ul>
                    {users.map(({name, id})=>(
                        <li onClick={()=>this.setState({selected:id})} 
                        key={id}
                        className={id===selected?'text-success':''}>Name: {name}</li>)
                    )}                    
                </ul>
                    {!selected? <div>Please select person... </div>:<PersonInfo id={selected} />}                
            </div>
        )
    }
}

