import * as actionTypes from '../actionTypes.js';

const INITIAL_STATE = [
    {
        data: 1,
        loading: false,
        error: null
    },
    {
        data: 2,
        loading: false,
        error: null
    },
    {
        data: 3,
        loading: false,
        error: null
    }
];

const items = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_PAGE: {
            console.log('new page');
            const newPage = [...Array(45)].map(_=>({
                data: 'some data',
                loading: false,
                error: null
            }));            
            return [...state, ...newPage];
        }
        default: return state
    }
};

export default items;