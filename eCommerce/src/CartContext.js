import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id, name, price, discount, url) => {
        let discountedPrice = (price - (discount * price) / 100).toFixed(2);
        let Items = {
            all: {

            }


        }
        if (Items.all[id]) {
            console.log("Diplicate");
        }
        setCartItems((prevState) => [
            ...prevState,
            { id, name, discountedPrice, url, price },
        ]);

    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;
