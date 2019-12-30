import React from 'react';
import List from './List/';
import './Todo.css';

const Todo = () => {
    return (
        <div className="Todo">
           <div className="title">
                <h2>Todo</h2>
                <div>Stats</div>
            </div>
           <div className="filter">
                <input type="text"/>
                <button>all</button>
                <button>active</button>
                <button>done</button>
           </div>
           <List />
           <div className="addItem">add<button>Add</button></div>
           <div className="footer">Copyright</div>
        </div>
    )
}

export default Todo;
