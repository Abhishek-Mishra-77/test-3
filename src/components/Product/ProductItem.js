import React, { useCallback, useContext } from 'react';
import './ProductItems.css';
import { ItemProviderContect } from '../ConectApi/ItemProvider';

const ProductItem = (props) => {

    const cartContext = useContext(ItemProviderContect);

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
                            <th>Buy1</th>
                            <th>Buy2</th>
                            <th>Buy3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.ProductName}</td>
                                <td>{product.description}</td>
                                <td>{product.price}Rs</td>
                                <td>1qty</td>
                                <td>{<button onClick={() => cartContext.addByOne(product)} >Buy 1 </button>}</td>
                                <td>{<button onClick={() => cartContext.addByTwo(product)} >Buy 2</button>}</td>
                                <td>{<button onClick={() => cartContext.addByThree(product)} >Buy 3</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ProductItem