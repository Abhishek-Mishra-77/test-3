import React, { useCallback, useContext } from 'react';
import './ProductItems.css';
import { ItemProviderContect } from '../ConectApi/ItemProvider';

const ProductItem = (props) => {

    const cartContext = useContext(ItemProviderContect);
    console.log(cartContext)

    return (
        <div className='product'>
            <div className='main'>
                <h2>Items</h2>

                <table className='table' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.ProductName}</td>
                                <td>{product.description}</td>
                                <td>{product.price}Rs</td>
                                <td>1qty</td>
                            <td>{<button onClick={() => cartContext.addProducts(product)} >Add To Cart</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ProductItem