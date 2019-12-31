import React from 'react';
import Buttons from '../Buttons';
import { deleteItem } from '../Redux';
import { connect } from 'react-redux';
import './ListItem.css';

const ListItem = ({ n, id, label, deleteItem, buttonsBits }) => {
    return (
        <div className="item">
            <div className="label">
                {n+1}. {label}            
            </div> 
            <Buttons deleteItem={deleteItem} id={id} buttonsBits={buttonsBits} />
    </div>
    )
}

export default connect(null, {deleteItem})(ListItem);