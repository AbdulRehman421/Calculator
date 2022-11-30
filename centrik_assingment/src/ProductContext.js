import { createContext, useState } from "react";
import axios from 'axios';
const ProductContext = createContext()

export function ProductProvider({ children }) {

    const [ProductItems, setProductItems] = useState([])
    const setProducts = () => {
        const API_URL = 'https://dummyjson.com/products?limit=100'
        async function fetchData() {
            const request = await axios.get(API_URL);
            setProductItems(request.data.products);

            return request;
        }
        fetchData()
        return ProductItems
    }
    setProducts()

    return (
        <ProductContext.Provider value={{ ProductItems }}>{children}</ProductContext.Provider>
    )
}
export default ProductContext;