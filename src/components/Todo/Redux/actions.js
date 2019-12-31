const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SELECT_BUTTON_PRESSED = 'SELECT_BUTTON_PRESSED';

const addNewItem = label => {
    return {
        type: ADD_NEW_ITEM,
        payload: {
            label,
            id: Math.random()
        }
    }
};

const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
};

const selectButtonPressed = ( todoItemId, buttonNumber ) => {
    return {
        type: SELECT_BUTTON_PRESSED,
        payload: {
            todoItemId,
            buttonNumber
        }
    }
};

export { addNewItem, deleteItem, selectButtonPressed, 
    ADD_NEW_ITEM, DELETE_ITEM, SELECT_BUTTON_PRESSED };