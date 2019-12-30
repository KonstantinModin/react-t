import React from 'react';
import ListItem from '../ListItem/';
import { connect } from 'react-redux';
import './List.css';

const List = ({ items }) => {
    console.log(items);
    return (
        <div className="list">
            {items.map(({id, label})=><ListItem key={id} label={label}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.todos
    }
}

export default connect(mapStateToProps)(List);