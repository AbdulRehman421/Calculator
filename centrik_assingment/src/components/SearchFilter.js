import React from 'react'
import { useState } from 'react'
import data from '../database'


const SearchFilter = () => {
    const [filterProduct, setFilterProduct] = useState([])

    function sorting(e) {
        if (e.target.value === 'prize') {
            data.map(product => (
                setFilterProduct(filterProduct.push(product.price))
            ))
            console.log(filterProduct)

            return <>
                filterProduct
            </>

        }
    }

    return (
        <div className='flex justify-end my-5  border-black border-solid  '>
            <form action="#">
                <input type="text" placeholder='Search ' className='p-2  bg-cyan-300 text-black w-60 rounded' />
                <select className='mx-5 w-40 p-2 bg-cyan-300 text-black border-0 rounded' name='sort' id='sort' onChange={sorting}>
                    <option value="#">Sort by</option>
                    <option value="rating">Rating</option>
                    <option value="discount">Discount</option>
                    <option value="prize">Prize</option>
                </select>
            </form>

        </div>
    )
}

export default SearchFilter