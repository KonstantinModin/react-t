import { combineReducers } from 'redux';
import todosItemsReducer from './reducers/todosItems';
import filters from './reducers/filters';

const todoReducer = combineReducers({
    todos: todosItemsReducer,
    filters: filters
});

export default todoReducer;