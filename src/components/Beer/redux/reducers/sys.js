import { UPDATE_FIRST_START } from '../actionTypes';

const INITIAL_STATE = {
    firstStart: true
};

const sys = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FIRST_START: 
            return { ...state, firstStart:action.value }
        default: return state
    }
};

export default sys;