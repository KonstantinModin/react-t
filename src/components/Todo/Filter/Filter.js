import React from 'react';
import buttonsArray from '../Buttons/buttonsArray';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { filterButtonPressed } from '../Redux';
import './Filter.css';

const Filter = ({ filters, filterButtonPressed }) => {    
    return (
        <div className="filter">            
            <input type="text" placeholder="Type some keyword..."/>            
            {buttonsArray.map(({ id:key, label, color, icon, trash })=>{
                if (trash) return null
                return (
                    <button 
                        onClick={()=>filterButtonPressed(key+1)} 
                        key={key} 
                        className={filters[key+1]&&'sel'}
                        >
                        {key!==-1 && <><Icon icon={icon} color={color}/><br/></>}
                        {label}
                    </button>
                )
            })}
            
        </div>
    )
};

export default connect(({filters})=>({filters}), {filterButtonPressed})(Filter);