import React, { useState } from 'react';
import './ProductForm.css'

const ProductForm = (props) => {

    const [ProductName, setProductName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState('');

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        const product = {
            ProductName,
            description,
            price
        }
        props.addProductItems(product)
    }

    return (
        <div className='main'>
            <div><h2>Add Items</h2></div>
            <form onSubmit={OnSubmitHandler}>

                <div className='input'>
                    <input
                        value={ProductName}
                        type="text"
                        placeholder="Medicine Name"
                        onChange={(event) => setProductName(event.target.value)}
                        className="fname" />
                </div>

                <div className='input'>
                    <input
                        value={description}
                        type="text"
                        placeholder="Description"
                        onChange={(event) => setdescription(event.target.value)}
                        className="fname" />
                </div>
                <div className='input'>
                    <input
                        value={price}
                        type="number"
                        placeholder="Price"
                        onChange={(event) => setPrice(event.target.value)}
                        className="Price" />
                </div>
                <button className='btn' type="submit" >Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm