import React from 'react';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import buttonsArray from './buttonsArray';
import { deleteItem, selectButtonPressed } from '../Redux';
import { connect } from 'react-redux';
import './Buttons.css';

const Buttons = ({ deleteItem, selectButtonPressed, id, buttonsBits }) => {    
    return (
        <div className="buttons">
            {buttonsArray.map(({ id:key, label, color, icon, trash })=>{
                if (key===-1) return null
                return (
                    <button 
                        onClick={trash?()=>deleteItem(id):()=>selectButtonPressed(id,key)} 
                        key={key} 
                        className={buttonsBits[key]&&'sel'}
                        >
                        <Icon icon={icon} color={color}/><br/>
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default connect(null, {deleteItem, selectButtonPressed})(Buttons);