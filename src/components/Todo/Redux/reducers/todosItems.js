import { ADD_NEW_ITEM, DELETE_ITEM, SELECT_BUTTON_PRESSED } from '.././actions';

const INITIAL_STATE = [
    { label: 'Drink coffee', id: 101, buttons: [0,1,0,0,0,0,0,0,0] },
    { label: 'Debug my project', id: 102, buttons: [0,0,0,1,0,0,0,0,0] },
    { label: 'Go shopping', id: 103, buttons: [0,0,1,0,0,1,0,0,0] },        
    { label: 'Repair Car', id: 104, buttons: [1,0,0,1,0,0,0,0,0] },            
    { label: 'Talk to Barbara', id: 106, buttons: [1,0,0,0,1,0,0,0,0] }        
];

const todosItemsReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch ( type ) {
        case ADD_NEW_ITEM:             
            const newItem = {
                label: payload.label,
                id: payload.id,
                buttons: [0,0,0,0,0,0,0,0,0]
            };
            return [...state, newItem];

        case DELETE_ITEM: return state.filter(({ id }) => id !== payload);

        case SELECT_BUTTON_PRESSED:           
            return state.map(todoItem=>{
                if (todoItem.id !== payload.todoItemId) 
                    return todoItem; // not todoItem that we find

                if (payload.buttonNumber===6) // "not important at all" pressed
                    return {...todoItem, buttons:[0,0,0,0,0,0,todoItem.buttons[6]?0:1,0,0]};                    
                    
                if (payload.buttonNumber===7) // "you can forget" pressed
                    return {...todoItem, buttons:[0,0,0,0,0,0,0,todoItem.buttons[7]?0:1,0]};
                    
                    //do the main job
                return {...todoItem, buttons:todoItem.buttons.map((b,i)=>{                   
                    return i===payload.buttonNumber?+!b:i>5?0:b})};

            });
            
        default: return state;
    }
};

export default todosItemsReducer;