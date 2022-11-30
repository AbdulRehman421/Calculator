import { React, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';

import CartContext from '../CartContext';
import ProductContext from '../ProductContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Card = () => {
    // const { setProducts } = useContext(ProductContext)
    const { ProductItems } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext);


    return (

        <div className=' flex flex-wrap justify-evenly text-center text-black'>

            {
                ProductItems.map(product => (

                    <Link to={`/items/${product.id}`} className=' w-1/4 p-5  m-5 bg-gradient-to-br from-cyan-300 to bg-slate-300 rounded hover:scale-105 ease-in-out' key={product.id}>
                        <div className='flex-col  '>
                            <div> <img src={product.thumbnail} alt="" className=' m-auto p-5 h-48 w-40 rounded border-2 border-black py-5' /></div>
                            <h2 className=' p-2'> {product.title}</h2>
                            <div className=' flex justify-between m-5'>

                                <h2>{product.price}</h2>
                                <button onClick={(e) => addToCart(product.title, product.price, product.images[0]) || e.preventDefault()}>  <i className="fa-solid fa-bag-shopping m-2"></i></button>
                            </div>
                        </div>
                    </Link>

                ))
            }

        </div >

    )
}

export default Card

