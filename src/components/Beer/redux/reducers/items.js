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
                error: false
            }));            
            return [...state, ...newPage];
        };

        case FETCH_ITEM_REQUEST: {
            console.log('fetching...', action.id);            
            return state.map((e,i)=>i!== action.id? e : {...e, loading:true, shouldFetch:false});
        };

        case FETCH_ITEM_SUCCESS: {
            const { id, data } = action;
            console.log('success', id);
            return state.map((e,i)=>i !== id? e : {...e, loading:false, shouldFetch:false, data });
        };

        case FETCH_ITEM_FAILURE: {
            const { id, error } = action;
            console.log('fail', id);
            return state.map((e,i)=>i !== id? e : {...e, loading:false, shouldFetch:false, error });
        };

        default: return state;
    };
};

export default items;