import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ItemProviderContect = createContext();

const ItemProvider = (props) => {

    const [Products, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const isData = !!Products

    useEffect(() => {
        let c = 0;
        Products.forEach((product) => {
            c += product.count;
        })
        setCount(c)
    }, [Products])


    useEffect(() => {
        if (isData) {
            const fetchData = async () => {
                const response = await axios.get(`https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart`);
                setProduct(response.data)
            }
            fetchData();
        }
    }, [isData])


    const addByOne = async (productDetails) => {
        const { id } = productDetails;
        const newProduct = {
            id: productDetails.id,
            count: 1,
            ProductName: productDetails.ProductName,
            description: productDetails.description,
            price: productDetails.price
        }

        setProduct((Products) => {
            if (Products) {
                const restItems = Products.filter((item) => item.id !== id);
                const currentItem = Products.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count++;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newProduct = {
                        id: productDetails.id,
                        count: 1,
                        ProductName: productDetails.ProductName,
                        description: productDetails.description,
                        price: productDetails.price
                    }
                    return [...restItems, newProduct];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: productDetails.id,
                    count: 1,
                    enteredPrice: productDetails.enteredPrice,
                    enteredName: productDetails.enteredName,
                    enteredDescription: productDetails.enteredDescription
                }];
            }
        });


        try {

            const response = await axios.get('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart');
            const existingCartItems = response.data;

            const data = existingCartItems.find((item) => {
                return item.id === newProduct.id
            })

            if (!data) {
                const response = await axios.post('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart', newProduct)
                console.log(response.data);
            }
            else {
                const updatedProduct = {
                    id: productDetails.id,
                    count: data.count + 1,
                    ProductName: productDetails.ProductName,
                    description: productDetails.description,
                    price: productDetails.price
                }
                const response = await axios.put(`https://crudcrud.com/api/063e8f44fed84296821b465afa61db49/cart/${data._id}`, updatedProduct)

            }
        }
        catch (error) {
            console.log()
        }
    };


    const addByTwo = async (productDetails) => {
        const { id } = productDetails;
        const newProduct = {
            id: productDetails.id,
            count: 2,
            ProductName: productDetails.ProductName,
            description: productDetails.description,
            price: productDetails.price
        }

        setProduct((Products) => {
            if (Products) {
                const restItems = Products.filter((item) => item.id !== id);
                const currentItem = Products.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count = currentItem.count + 2;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newProduct = {
                        id: productDetails.id,
                        count: 2,
                        ProductName: productDetails.ProductName,
                        description: productDetails.description,
                        price: productDetails.price
                    }
                    return [...restItems, newProduct];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: productDetails.id,
                    count: 2,
                    enteredPrice: productDetails.enteredPrice,
                    enteredName: productDetails.enteredName,
                    enteredDescription: productDetails.enteredDescription
                }];
            }
        });


        try {

            const response = await axios.get('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart');
            const existingCartItems = response.data;

            const data = existingCartItems.find((item) => {
                return item.id === newProduct.id
            })

            if (!data) {
                const response = await axios.post('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart', newProduct)
            }
            else {
                const updatedProduct = {
                    id: productDetails.id,
                    count: data.count + 2,
                    ProductName: productDetails.ProductName,
                    description: productDetails.description,
                    price: productDetails.price
                }

                const response = await axios.put(`https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart/${data._id}`, updatedProduct)


            }
        }
        catch (error) {
            console.log()
        }
    };


    const addByThree = async (productDetails) => {
        const { id } = productDetails;
        const newProduct = {
            id: productDetails.id,
            count: 3,
            ProductName: productDetails.ProductName,
            description: productDetails.description,
            price: productDetails.price
        }

        setProduct((Products) => {
            if (Products) {
                const restItems = Products.filter((item) => item.id !== id);
                const currentItem = Products.find((item) => item.id === id);

                if (currentItem) {
                    currentItem.count = currentItem.count + 3;
                    return [...restItems, currentItem];
                } else {
                    // If the item doesn't exist in the array, add it with a count of 1.
                    const newProduct = {
                        id: productDetails.id,
                        count: 3,
                        ProductName: productDetails.ProductName,
                        description: productDetails.description,
                        price: productDetails.price
                    }
                    return [...restItems, newProduct];
                }
            } else {
                // If items is undefined or null, create a new array with the item with count 1.
                return [{
                    id: productDetails.id,
                    count: 3,
                    enteredPrice: productDetails.enteredPrice,
                    enteredName: productDetails.enteredName,
                    enteredDescription: productDetails.enteredDescription
                }];
            }
        });


        try {

            const response = await axios.get('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart');
            const existingCartItems = response.data;

            const data = existingCartItems.find((item) => {
                return item.id === newProduct.id
            })

            if (!data) {
                const response = await axios.post('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart', newProduct)
            }
            else {
                const updatedProduct = {
                    id: productDetails.id,
                    count: data.count + 3,
                    ProductName: productDetails.ProductName,
                    description: productDetails.description,
                    price: productDetails.price
                }
                const response = await axios.put(`https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart/${data._id}`, updatedProduct)
            }
        }
        catch (error) {
            console.log()
        }
    };


    const removeCartProduct = async (id) => {
        setProduct((Products) => {
            const newProducts = Products.filter((product) => product.id !== id);
            return newProducts
        })

        try {
            const response = await axios.get('https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart');

            const existingCartItems = response.data;
            const data = existingCartItems.find((item) => {
                return item.id === id;
            })

            if (data) {
                const response = await axios.delete(`https://crudcrud.com/api/13ae0e8dcc8945009af7dabf13151ff9/cart/${data._id}`);
                console.log(response.data)

            }


        }
        catch (error) {
            console.log(error);
        }
    }









    return (
        <ItemProviderContect.Provider value={{ Products, count, addByOne, addByTwo, addByThree, removeCartProduct }}>
            {props.children}
        </ItemProviderContect.Provider>
    )
}

export default ItemProvider