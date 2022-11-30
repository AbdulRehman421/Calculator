import React from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import SearchFilter from '../components/SearchFilter'

// import { useContext, useReducer } from 'react'
// import ProductContext from '../ProductContext'





// const [products, dispatch] = useReducer(reducer, initialState)


const AllProducts = () => {
    //     const { ProductItems } = useContext(ProductContext)
    // const initialState = {
    //   
    // }



    return (
        <div className=' static'>
            < SearchFilter />


            <div className=' flex'>
                <Filter></Filter>
                <Card />
            </div>
        </div>

    )
}

export default AllProducts