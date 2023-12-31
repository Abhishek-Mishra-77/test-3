import React, { useEffect, useInsertionEffect, useState } from 'react';
import ProductForm from './components/Product/ProductForm';
import ProductItem from './components/Product/ProductItem';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import ItemProvider from './components/ConectApi/ItemProvider';


function App() {

  const [Products, setProduct] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)

  const addProductItems = (ProductItem) => {
    const newData = {
      id: Math.random().toString(),
      ...ProductItem
    }

    setProduct((Product) => {
      const newProductItem = [...Product, newData];
      localStorage.setItem('product', JSON.stringify(newProductItem))
      return newProductItem;
    })
  }

  useEffect(() => {
    const fetchData = JSON.parse(localStorage.getItem('product'));
    if (fetchData) {
      setProduct(fetchData);
    }
    else {
      setProduct([]);
    }
  }, [])

  const onCartHandler = () => {
    setCartOpen((cartOpen) => !cartOpen)
  }


  return (
    <ItemProvider>
      <div className="App">
        <NavBar onCartHandler={onCartHandler} />
        {cartOpen && <Cart onCartHandler={onCartHandler} />}
        <ProductForm addProductItems={addProductItems} />
        <ProductItem Products={Products} />
      </div>
    </ItemProvider>
  );
}

export default App;
