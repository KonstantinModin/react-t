import { UPDATE_FIRST_START, SET_SCROLL_TOP } from '../actionTypes';

const INITIAL_STATE = {
    firstStart: true,
    scroll: 0
};

const sys = (state = INITIAL_STATE, { type, value }) => {
    switch ( type ) {
        case UPDATE_FIRST_START: 
            return { ...state, firstStart: value };
        case SET_SCROLL_TOP:
            return { ...state, scroll: value };
        default: return state
    }
};

export default sys;