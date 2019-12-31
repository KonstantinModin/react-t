import React from 'react';
import ListItem from '../ListItem/';
import { connect } from 'react-redux';
import './List.css';

const List = ({ items }) => {    
    return (
        <div className="list">
            {items.map(({ id, label, buttons }, i)=> 
                <ListItem n={i} key={id} label={label} id={id} buttonsBits={buttons} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.todos
    }
}

export default connect(mapStateToProps)(List);