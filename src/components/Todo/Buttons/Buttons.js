import React from 'react';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import buttonsArray from './buttonsArray';
import './Buttons.css';

const Buttons = ({ deleteItem, id, buttonsBits }) => {
    return (
        <div className="buttons">
            {buttonsArray.map(({ id:key, label, color, icon, trash })=>{
                
                const bits = ("0".repeat(7)+buttonsBits.toString(2)).slice(-8);
                const curBit = +bits.slice(key,key+1);
                console.log(bits,curBit,key);


                return (
                    <button onClick={trash?()=>deleteItem(id):()=>{}} key={key} className={curBit&&'sel'}>
                        <Icon icon={icon} color={color}/><br/>
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default Buttons;