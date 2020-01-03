import { FILTER_BUTTON_PRESSED, FILTER_INPUT_PRESSED } from '../actions';

const INITIAL_STATE = {
    text:'',
    arr:[1,0,0,0,0,0,0,0,0]
};

const filtersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch ( type ) {
        case FILTER_BUTTON_PRESSED: 
            if (!payload) return INITIAL_STATE;
            const newState = {...state, arr:state.arr.map((e,i)=>i?i===payload?+!e:e:0)};
            
            //toggle "Show All" if all unchecked
            if (newState.arr.every(e=>e===0)) return INITIAL_STATE; 
            return newState;
            
            //controlled input
        case FILTER_INPUT_PRESSED:
            return {...state, text:payload};
        default: return state;
    }
};

export default filtersReducer;