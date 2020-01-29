import { 
    ADD_NEW_PAGE, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE } from '../actionTypes.js';

const INITIAL_STATE = [];

const items = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_PAGE: {
            console.log('new page');
            const newPage = [...Array(25)].map(_=>({
                shouldFetch: true,
                data: null,
                loading: false,
                error: null
            }));            
            return [...state, ...newPage];
        };

        case FETCH_ITEM_REQUEST: {
            console.log('fetching...', action.id);            
            return state.map((e,i)=>i!== action.id? e : {...e, loading:true, shouldFetch:false});
        };

        case FETCH_ITEM_SUCCESS: {
            console.log('success', action.id);
            return state;
        };

        case FETCH_ITEM_FAILURE: {
            console.log('fail', action.id);
            return state;
        };

        default: return state;
    };
};

export default items;