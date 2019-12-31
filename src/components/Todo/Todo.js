import React from 'react';
import List from './List/';
import AddItemInput from './AddItemInput';
import './Todo.css';

const Todo = () => {    
    return (
        <div className="Todo">
            <div className="title">
                <h2>Ultimate Todo App</h2>
                <div>Stats</div>
            </div>
            <div className="filter">
                <input type="text"/>
                <button>all</button>
                <button>active</button>
                <button>done</button>
            </div>
            <List />
            <AddItemInput />             
        </div>
    )
}

export default Todo;
