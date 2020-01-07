import React from 'react';
import { controls } from './controls';
import { connect } from 'react-redux';
import './Calc.css';

const Calc = ({ screen, keyPress}) => {    
    return (
        <div className="Calc">
            <h3>Calculator (with Redux)</h3>
            <div className="Screen"><span>{screen}</span></div>
            <div className="Controls">
                {controls.map(({ id, label, action, type, payload })=>
                    <div 
                        key={id} 
                        action={action} 
                        className={type}
                        onClick={()=> keyPress(action, payload)}
                        ><span>{label}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({screen: state.screen})
const mapDispatchToProps = (dispatch) => ({ keyPress: (action, payload) => dispatch({type: action, payload}) });
export default connect(mapStateToProps, mapDispatchToProps)(Calc);