import { 
    ADD_NEW_PAGE, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE } from '../actionTypes.js';

const INITIAL_STATE = [];

const items = (state = INITIAL_STATE, { type, id, action, data, error }) => {
    switch (type) {
        case ADD_NEW_PAGE: {
            // console.log('new page');
            const newPage = [...Array(15)].map(_=>({
                shouldFetch: true,
                data: null,
                loading: false,
                error: false
            }));            
            return [...state, ...newPage];
        };

        case FETCH_ITEM_REQUEST: 
            // console.log('fetching...', id);            
            return state.map((e,i)=>i!== id ? e : {...e, loading:true, shouldFetch:false });        

        case FETCH_ITEM_SUCCESS:             
            // console.log('success', id);
            return state.map((e,i)=>i !== id? e : {...e, loading:false, shouldFetch:false, data });        

        case FETCH_ITEM_FAILURE:             
            // console.log('fail', id);
            return state.map((e,i)=>i !== id? e : {...e, loading:false, shouldFetch:false, error });        

        default: return state;
    };
};

export default items;