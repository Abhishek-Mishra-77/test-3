import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ItemProviderContect = createContext();

const ItemProvider = (props) => {

    const [Products, setProduct] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let c = 0;
        Products.forEach((product) => {
            c += product.count;
        })
        setCount(c)
    }, [Products])


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://crudcrud.com/api/2070f12f64a84537a17683bfe6355739/cart')
    //             console.log(response.data);
    //             setProduct()
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // })


    const addProducts = async (productDetails) => {
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
            console.log(newProduct)

            const response = await axios.get('https://crudcrud.com/api/2070f12f64a84537a17683bfe6355739/cart');
            console.log(response.data);
            const existingCartItems = response.data;

            const data = existingCartItems.find((item) => {
                return item.id === newProduct.id
            })

            if (!data) {
                const response = await axios.post('https://crudcrud.com/api/2070f12f64a84537a17683bfe6355739/cart', newProduct)
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
                const response = await axios.put(`https://crudcrud.com/api/2070f12f64a84537a17683bfe6355739/cart/${data.id}`, updatedProduct)
                console.log(response.data)

            }
        }
        catch (error) {
            console.log()
        }
    };







    return (
        <ItemProviderContect.Provider value={{ Products, count, addProducts }}>
            {props.children}
        </ItemProviderContect.Provider>
    )
}

export default ItemProvider