import React, { useState } from 'react';
import './Hooks.css';

const Hooks = () => {
    const INITIAL_STATE = [
        { 
            productLabel: 'Bananas',
            productQuantity: '25',
            id: 101
        }
    ];
    
    const [ productLabel, setProductLabel ] = useState('');
    const [ productQuantity, setProductQuantity ] = useState('');
    const [ cart, setCart ] = useState(INITIAL_STATE);

    return (
        <div className="Hooks">
            <div className="left">
                <div><h3>Hooks</h3></div>
                <div>Product Title</div>
                <input
                    type="text"
                    value={productLabel}
                    placeholder="Enter Product Title"
                    onChange={({ target: { value } }) => setProductLabel(value)} />
                <div>Product Quantity</div>
                <input
                    type="number"
                    value={productQuantity}
                    placeholder="Enter Product Quantity"
                    onChange={({ target: { value } }) => setProductQuantity(value)}
                />
                <button
                    className="btn-danger"
                    onClick={() => {
                        setCart(cur => [...cur, { productLabel, productQuantity, id: Math.random() }]);
                        setProductLabel('');
                        setProductQuantity('');
                    }}>
                    Add to Cart
                </button>
            </div>
            <div className="right">
                {cart.map(({ productLabel, productQuantity, id }) => (
                    <div
                        className="cartItem"
                        key={id}
                        onClick={() => setCart(cur => cur.filter(({ id: idx }) => idx !== id))}>
                        {productLabel}: {productQuantity}x
                    </div>
                ))}
            </div>           
        </div>
    )
}

export default Hooks;
