import React from 'react';
import List from './List';
import AddItemInput from './AddItemInput';
import Stats from './Stats';
import Filter from './Filter';
import './Todo.css';

const Todo = () => {    
    return (
        <div className="Todo">
            <div className="title">
                <h2>Ultimate Todo App <span style={{color:'red'}}>with Redux</span></h2>
                <Stats />
            </div>
            <Filter />
            <List />
            <AddItemInput />             
        </div>
    )
}

export default Todo;
