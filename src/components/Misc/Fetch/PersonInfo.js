import React, { Component } from 'react';
import * as UserApi from './usersApi';

class PersonInfo extends Component {
    state = {
        person: {},
        loaded: false,
        num: 0       
    };
    fetchData(){
        if (this.state.loaded) this.setState({ loaded:false });
        
        // console.log('this.props.id',this.props.id);
        UserApi.get(this.props.id).then((person)=>{
            // console.log('person=',person);
            if (person) this.setState({ person, loaded: true });
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.id !== this.props.id) this.fetchData();
    }

    componentDidMount(){
        console.log('componentDidMount info');
        this.fetchData();        
    }

    updateNum = () => {
        this.setState({num: this.state.num + 1});
    }

    calcDer(n){
        console.log('der');
        return n**3;
    }


    render() {

        const der = this.calcDer(this.state.num);
        const  { loaded, person } = this.state;

        // if (!this.props.id) return <div>Please select person... </div>;
        if (!loaded) return (<div>
                                <div>Loading person with ID of {this.props.id}...</div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                               </div>
                            </div>);
        
        return (
        <div>
            This person has ID of {this.props.id}
            <ul>
                <li>Name: {person.name}</li>
                <li>Id: {person.id}</li>
                <li>Age: {person.age}</li>
                <li onClick={this.updateNum}>Number: {this.state.num}</li>
                <li>Der: {der}</li>
            </ul>
        </div>
    )
    }
}

export default PersonInfo;
