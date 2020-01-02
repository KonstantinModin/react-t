import { FILTER_BUTTON_PRESSED, FILTER_INPUT_PRESSED } from '../actions';

const INITIAL_STATE = {
    text:'',
    arr:[1,0,0,0,0,0,0,0,0]
};

const filtersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch ( type ) {
        case FILTER_BUTTON_PRESSED: 
            if (!payload) return INITIAL_STATE;
            return {...state, arr:state.arr.map((e,i)=>i?i===payload?+!e:e:0)};
        case FILTER_INPUT_PRESSED:
            return {...state, text:payload};
        default: return state;
    }
};

export default filtersReducer;