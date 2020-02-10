import { 
    ADD_NEW_PAGE, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    UPDATE_FIRST_START,
    SET_SCROLL_TOP
} from './actionTypes.js';

import axios from 'axios';

export const addNewPage = () => {
    return {
        type: ADD_NEW_PAGE
    }
};

export const fetchItemRequest = ( id ) => {
    return {
        type: FETCH_ITEM_REQUEST,
        id
    }
};

export const fetchItemSuccess = (id, data) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        id,
        data
    }
};

export const fetchItemFailure = (id, error) => {
    return {
        type: FETCH_ITEM_FAILURE,
        id,
        error        
    }
};

const getInfo = (id, dispatch, fakeError) => {
    axios.get(`https://api.${fakeError?'f':''}punkapi.com/v2/beers/${id+1}`)
        .then(
            ({ data }) => {
                // console.log(data[0]);
                dispatch(fetchItemSuccess(id, data[0]));
            }, 
            ({ stack, config: {url}}) => {
                // console.warn(error);
                dispatch(fetchItemFailure(id, {stack, url, fakeError}));
            }
        )
        .catch(error=>console.warn('From catch error in item #', id))
}

export const fetchItem = ( id ) => {
    const fakeError = Math.random() < 0.1;
    return (dispatch) => {
        dispatch(fetchItemRequest(id));
        setTimeout(()=>getInfo(id, dispatch, fakeError), 1000);
    }
};

export const updateFirstStart = ( value ) => {
    return {
        type: UPDATE_FIRST_START,
        value
    }
};

export const setScrollTop = ( value ) => {
    return {
        type: SET_SCROLL_TOP,
        value
    }
};