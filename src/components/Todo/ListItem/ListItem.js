import React from 'react';
import Buttons from '../Buttons';
import './ListItem.css';

const ListItem = ({ n, id, label, buttonsBits }) => {
    return (
        <div className="item">
            <div className="label">
                {n+1}. {label}            
            </div> 
            <Buttons id={id} buttonsBits={buttonsBits} />
        </div>
    )
}

export default ListItem;