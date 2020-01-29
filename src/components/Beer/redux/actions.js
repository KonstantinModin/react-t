import * as actionTypes from './actionTypes';

export const addNewPage = () => {
    return {
        type: actionTypes.ADD_NEW_PAGE
    }
};

export const fetchItemRequest = id => {
    return {
        type: actionTypes.FETCH_ITEM_REQUEST,
        id
    }
};