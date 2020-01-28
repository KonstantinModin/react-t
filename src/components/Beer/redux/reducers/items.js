import * as actionTypes from '../actionTypes.js';

const INITIAL_STATE = {};

const items = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_PAGE: {
            console.log('new page');
            return state
        }
        default: return state
    }
};

export default items;