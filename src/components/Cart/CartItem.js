import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <li className='cartItem'>
            <div className='summary'>
                <h2>{props.ProductName}</h2>
                <p>{props.description}</p>
                <span className='price'>{props.price}rs</span>
                <span className='amount'> x {" "}{props.count}</span>
            </div>
            <button onClick={() => props.removeCartProduct(props.id)}>Remove</button>
        </li>
    )
}

export default CartItem