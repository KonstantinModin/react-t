import React from 'react';
import buttonsArray from '../Buttons/buttonsArray';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { filterButtonPressed, filterInputPressed } from '../Redux';
import './Filter.css';

const Filter = ({ text, arr, filterButtonPressed, filterInputPressed }) => {    
    return (
        <div className="filter">            
            <input 
                onChange={(e)=>filterInputPressed(e.target.value)} 
                type="text" 
                placeholder="Type some keyword..." 
                value={text}
            /> 
            {buttonsArray.map(({ id:key, label, color, icon, trash })=>{
                if (trash) return null
                return (
                    <button 
                        onClick={()=>filterButtonPressed(key+1)} 
                        key={key} 
                        className={arr[key+1]&&'sel'}
                        >
                        {key!==-1 && <><Icon icon={icon} color={color}/><br/></>}
                        {label}
                    </button>
                )
            })}
            
        </div>
    )
};

export default connect(({filters:{text, arr}})=>({text,arr}), {filterButtonPressed, filterInputPressed})(Filter);