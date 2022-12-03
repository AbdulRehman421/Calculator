import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id, name, price, discount, url) => {
        let discountedPrice = (price - (discount * price) / 100).toFixed(2);

        setCartItems((prevState) => [
            ...prevState,
            { id, name, discountedPrice, url, price },
        ]);
        console.log("added");
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;
