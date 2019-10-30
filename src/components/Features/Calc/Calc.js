import React from 'react';
import { controls } from './controls';
import { connect } from 'react-redux';
import './Calc.css';

const Calc = ({ state, keyPress}) => {    
    return (
        <div className="Calc">
            <h3>Calculator (with Redux)</h3>
            <div className="Screen"><span>{state}</span></div>
            <div className="Controls">
                {controls.map(({ id, label, action, type })=>
                    <div 
                        key={id} 
                        action={action} 
                        className={type}
                        onClick={()=> keyPress(action)}
                        ><span>{label}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({state: state})
const mapDispatchToProps = (dispatch) => ({ keyPress: (key) => dispatch({type: key}) });
export default connect(mapStateToProps, mapDispatchToProps)(Calc);