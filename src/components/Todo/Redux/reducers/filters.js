import { FILTER_BUTTON_PRESSED } from '../actions';

const INITIAL_STATE = [1,0,0,0,0,0,0,0,1];

const filtersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch ( type ) {
        case FILTER_BUTTON_PRESSED:
            console.log(payload);
            return state;
        default: return state;
    }
};

export default filtersReducer;