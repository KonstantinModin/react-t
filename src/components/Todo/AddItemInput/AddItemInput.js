import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { addNewItem } from '../Redux';
import './AddItemInput.css';

const AddItemInput = ({ addNewItem }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = ({ target:{ value } }) => {
        setError(false);
        setInputValue(value);
    }

    const handleInput = (e) => {
        e.preventDefault();
        const input = inputValue.trim();
        if (!input.length) {
            setError(true);
            return
        }
        addNewItem(input);
        setInputValue('');
    }
    
    return (
        <div className="addItem">
            <form onSubmit={handleInput}>
                <input className={error?'err':''} onChange={handleChange} type="text" placeholder="Add new task to do ..." value={inputValue}/>
                <button onClick={handleInput}>Add it</button>
                {error && <p>Enter a name for the new task</p>}
            </form>
        </div> 
    )
}

export default connect(null, { addNewItem })(AddItemInput);
