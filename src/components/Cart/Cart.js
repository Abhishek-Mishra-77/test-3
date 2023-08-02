import React, { useContext } from 'react';
import Model from '../UI/Model';
import CartItem from './CartItem';
import { ItemProviderContect } from '../ConectApi/ItemProvider';

const Cart = (props) => {

    const cartContext = useContext(ItemProviderContect);

    const cartItem = <ul>
        {cartContext.Products.map((product) => (
            <CartItem
                key={product.id}
                id={product.id}
                ProductName={product.ProductName}
                description={product.description}
                price={product.price}
                count={product.count}
                removeCartProduct={cartContext.removeCartProduct}
            >
            </CartItem>
        ))}
    </ul>

    return (
        <Model>
            {cartItem}
            <div>
                <div className='total'>
                    <span>TotalAmount</span>
                    <span>$ 120</span>
                </div>
                <div className='actions'>
                    <button
                        onClick={props.onCartHandler}
                        className='buttonItem'>
                        Close
                    </button>
                    <button>Order</button>
                </div>

            </div>
        </Model>
    )
}

export default Cart