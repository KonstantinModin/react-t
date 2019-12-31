const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

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
}

export { addNewItem, deleteItem, ADD_NEW_ITEM, DELETE_ITEM };