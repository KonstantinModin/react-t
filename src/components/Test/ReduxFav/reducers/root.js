import { combineReducers } from 'redux';
import initialState from '../data';

const firstReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEST': 
            console.log('test action');
            return state;
        ;
        case 'HANDLE_FAVORITE': 
            const idx = state.data.findIndex(item=>item.id===action.id);
            return {...state,
                    data:[...state.data.slice(0, idx),
                        {...state.data[idx], fav:!state.data[idx].fav},
                            ...state.data.slice(idx+1)]
            };
        ;
        default: return state;
    }
}

const root = combineReducers({
    shop: firstReducer
})

export default root;