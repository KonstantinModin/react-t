import React from 'react';
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
           <div className="list">
                <div className="item">1. Item1<input type="checkbox"/>Important<input type="checkbox"/>Not Important</div>
                <div className="item">2. Item2</div>
                <div className="item">3. Item3</div>
           </div>
           <div className="addItem">add<button>Add</button></div>
           <div className="footer">Copyright</div>
        </div>
    )
}

export default Todo;
