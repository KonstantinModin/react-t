import { ADD_NEW_ITEM, DELETE_ITEM } from '.././actions';

const INITIAL_STATE = [
    { label: 'First Item', id: 101, buttons: 127 },
    { label: 'Second Item', id: 102, buttons: 64 }        
];

const todosItemsReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch ( type ) {
        case ADD_NEW_ITEM:             
            const newItem = {
                label: payload.label,
                id: payload.id,
                buttons: 0
            };
            return [...state, newItem];
        case DELETE_ITEM: return state.filter(({ id }) => id !== payload);
        default: return state;
    }
};

export default todosItemsReducer;