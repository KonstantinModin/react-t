import React, { useState } from 'react';
import './Hooks.css';

const Hooks = () => {
    const [ productLabel, setProductLabel ] = useState('');
    const [ productQuantity, setProductQuantity ] = useState('');
    const [ cart, setCart ] = useState([]);

    return (
        <div className="Hooks">
            <h3>Hooks</h3>
            <label>Product Title</label>
            <input 
                type="text" 
                value={productLabel} 
                placeholder="Enter Product Title"
                onChange={({target:{value}})=>setProductLabel(value)} />
            <label>Product Quantity</label>
            <input 
                type="number" 
                value={productQuantity} 
                placeholder="Enter Product Quantity"
                onChange={({target:{value}})=>setProductQuantity(value)}                 
                />
            <button 
                className="btn-danger" 
                onClick={()=>setCart(cur=>[...cur, {productLabel, productQuantity, id:Math.random()}])}
                >
                Add to Cart
            </button>
            {cart.map(({productLabel, productQuantity, id})=>(
                <div
                    className="cartItem" 
                    key={id}
                    onClick={()=>setCart(cur=>cur.filter(({id:idx})=>idx!==id))}>
                    {productLabel}:{productQuantity}x
                </div>
            ))}
        </div>
    )
}

export default Hooks;
