import * as actionTypes from '../actionTypes.js';

const INITIAL_STATE = [];

const items = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_PAGE: {
            console.log('new page');
            const newPage = [...Array(25)].map(_=>({
                shouldFetch: true,
                data: null,
                loading: false,
                error: null
            }));            
            return [...state, ...newPage];
        }
        default: return state
    }
};

export default items;