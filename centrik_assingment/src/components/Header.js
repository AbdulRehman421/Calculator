import React from 'react'
import { NavLink } from 'react-router-dom';
import CartContext from '../CartContext'
import { useContext } from 'react';
const Header = () => {
    const { cartItems } = useContext(CartContext)
    // console.log(cartItems)
    return (<header className=' flex justify-evenly py-4 sticky top-0 bg-gray-900 text-white z-10'>

        <div>
            <NavLink to='/'>
                <h2>
                    Home
                </h2>
            </NavLink>
        </div>
        <div>

            <NavLink to='/allProducts'>
                <h2>
                    Products
                </h2>
            </NavLink>
        </div>
        <div>

            <NavLink to='/about'>
                <h2>
                    About
                </h2>
            </NavLink>
        </div>
        <div>

            <NavLink to='/contact'>
                <h2>
                    Contact
                </h2>
            </NavLink>
        </div>
        <NavLink to='/cart'>
            <span>
                <i className="fa-solid fa-bag-shopping m-2"></i>
                <span>{cartItems.length}</span>
            </span>
        </NavLink>
    </header>
    )
}

export default Header