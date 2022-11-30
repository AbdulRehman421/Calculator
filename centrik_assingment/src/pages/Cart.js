import React from 'react'
import CartContext from '../CartContext'
import { useContext } from 'react'
const Cart = () => {
    let showCart = false;

    const { cartItems } = useContext(CartContext)
    const amounts = cartItems.map(item => (
        item.price

    )
    )

    let totalAmount = amounts.reduce((prev, nxt) => prev + nxt, 0)
    console.log(totalAmount)
    if (totalAmount) {
        showCart = true;
    }
    return (
        <div className=' bg-gray-900'>
            {showCart ? <div className='flex justify-evenly py-5'>
                <div><h2>Total : <span>{totalAmount}</span></h2></div>
                <div><button className='bg-cyan-300 p-2 rounded text-black' > Buy Now</button></div>

            </div> :
                <div className=' h-screen flex justify-center items-center'>
                    <div>
                        <h1>CART IS EMPTY :( </h1>
                        <a href="/allProducts"><button className=' p-2 bg-white rounded text-black ml-4 mt-5'>Lets Shop</button></a>
                    </div>
                </div>
            }

            {cartItems.map(item => (
                <div className='flex w-1/2 justify-between mx-auto p-5 bg-gradient-to-br from-cyan-300 to bg-slate-300 rounded mb-0 mt-5 text-black h-32'>

                    <div>
                        <img src={item.url} alt={item.name} className=' w-24 h-24 rounded border-2 border-black' />
                    </div>
                    <div className='flex '>
                        <h2 className='m-10'>{item.name}</h2>
                        <h2 className='m-10'>{item.price}
                        </h2></div>
                </div>
            ))}




        </div>
    )
}

export default Cart