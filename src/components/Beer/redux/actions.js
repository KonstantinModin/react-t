import { 
    ADD_NEW_PAGE, 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE } from './actionTypes.js';
import axios from 'axios';

export const addNewPage = () => {
    return {
        type: ADD_NEW_PAGE
    }
};

export const fetchItemRequest = id => {
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

export const fetchItem = (id) => {
    return (dispatch) => {
        dispatch(fetchItemRequest(id));
        axios.get(`https://api.punkapi.com/v2/beers/${id+1}`)
            .then(
                ({ data })=>{
                    console.log(data);
                    dispatch(fetchItemSuccess(id, data));
                }, 
                error=>{
                    console.warn(error);
                    dispatch(fetchItemFailure(id, error));
                }
            )
            .catch(error=>console.warn('From catch error in item #', id))
    }
}