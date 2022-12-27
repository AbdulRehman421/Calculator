import { createContext, useState, useEffect } from "react";
import axios from "axios";
const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [ProductItems, setProductItems] = useState([]);
    useEffect(() => {
        const setProducts = () => {
            const API_URL = "https://dummyjson.com/products?limit=100";
            async function fetchData() {
                const request = await axios.get(API_URL);
                setProductItems(request.data.products);

                return request;
            }
            fetchData();
            return ProductItems;
        };
        setProducts();
    }, []);

    const getByCategory = (items, category) => {
        switch (category) {
            default:
                return items.filter((item) => item.category == category);
        }
    };
    const getBrand = (items, brand) => {
        switch (brand) {
            default:
                return items.filter((item) => item.brand == brand);
        }
    };

    return (
        <ProductContext.Provider
            value={{ ProductItems, setProductItems, getByCategory, getBrand }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContext;
