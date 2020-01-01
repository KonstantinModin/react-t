import React from 'react';
import buttonsArray from '../Buttons/buttonsArray';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <div className="con">
                <input type="text"/>
                <button>all</button>
                {buttonsArray.map(({ id:key, label, color, icon, trash })=>{
                    if (trash) return null
                    return (
                        <button 
                            // onClick={trash?()=>deleteItem(id):()=>selectButtonPressed(id,key)} 
                            key={key} 
                            // className={buttonsBits[key]&&'sel'}
                            >
                            <Icon icon={icon} color={color}/><br/>
                            {label}
                        </button>
                    )
                })}            
            </div>
        </div>
    )
}

export default Filter;
