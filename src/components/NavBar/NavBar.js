import React, { useContext } from 'react';
import './NavBar.css';
import { ItemProviderContect } from '../ConectApi/ItemProvider';

const NavBar = (props) => {

    const cartContext = useContext(ItemProviderContect)

    return (
        <nav className='navbar'>
            <div>
                <h2>Registration Form</h2>
            </div>
            <button
                onClick={props.onCartHandler}
                className='cart'>
                <h3>Your Cart</h3>
                <span>{cartContext.count}</span>
            </button>

        </nav>
    )
}

export default NavBar