import { useContext, useReducer } from 'react'
import ProductContext from './ProductContext'
const allProducts = useContext(ProductContext)
// const initialState = {
//     products: allProducts,
//     brands: [],
//     category: []
// }

console.log(allProducts);




// const [products, dispatch] = useReducer(reducer, initialState)