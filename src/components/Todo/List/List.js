import React from 'react';
import ListItem from '../ListItem/';
import { connect } from 'react-redux';
import './List.css';

const List = ({ items, filters }) => {    
    return (
        <div className="list">
            {items.filter(item=>filters.arr.slice(1).every((e,i)=>e?item.buttons[i]:true) &&
                    item.label.toLowerCase().includes(filters.text.toLowerCase())
                ).map(({ id, label, buttons }, i)=> 
                <ListItem n={i} key={id} label={label} id={id} buttonsBits={buttons} />)}
        </div>
    )
}

const mapStateToProps = ({ todos, filters}) => {
    return {
        items: todos,
        filters
    }
}

export default connect(mapStateToProps)(List);