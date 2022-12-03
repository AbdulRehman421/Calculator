import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
    let showCart = false;

    const { setCartItems, cartItems } = useContext(CartContext);
    const HandleBuy = () => {
        setCartItems([]);
    };

    const afterDiscount = cartItems.map((item) => item.discountedPrice);
    const beforeDiscount = cartItems.map((item) => item.price);

    let newTotal = afterDiscount
        .reduce((prev, nxt) => prev * 1 + nxt * 1, 0)
        .toFixed(2);
    let prevTotal = beforeDiscount
        .reduce((prev, nxt) => prev * 1 + nxt * 1, 0)
        .toFixed(2);
    let savings = (prevTotal - newTotal).toFixed(2);
    // console.log(totalAmount);
    if (cartItems.length > 0) {
        showCart = true;
    }
    window.scrollTo(0, 0);
    return (
        <div className=" bg-gray-900 border-t-2 border-white h-auto min-h-screen">
            {showCart ? (
                <div className="flex justify-evenly py-5 sticky top-16 bg-gray-900">
                    <div className=" fixed bottom-2 md:right-10">
                        <h2 className=" pt-2 text-base text-green-400">
                            Savings : <span className=" text-2xl">{savings}</span>
                        </h2>
                        <h2 className=" pt-2 text-base text-red-400">
                            Before Discount : <span className=" text-xl">{prevTotal}</span>
                        </h2>
                    </div>
                    <div>
                        <h2 className=" pt-2 text-lg">
                            Total : <span>{newTotal}</span>
                        </h2>
                    </div>
                    <div>
                        <Link to="/placed">
                            <button
                                className=" bg-slate-50 p-2 rounded text-black"
                                onClick={() => HandleBuy()}
                            >
                                {" "}
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className=" h-screen flex justify-center items-center">
                    <div>
                        <h1>CART IS EMPTY :( </h1>
                        <Link to="/allProducts">
                            <button className=" p-2 bg-white rounded text-black mt-5">
                                Lets Save More...
                            </button>
                        </Link>
                    </div>
                </div>
            )}

            {cartItems.map((item) => (
                <Link
                    to={`/items/${item.id}`}
                    // className=" w-1/4 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out"
                    key={item.id}
                >
                    {" "}
                    <div className="flex  justify-between mx-auto p-4  bg-gradient-to-br from-gray-300 to bg-gray-200 rounded mb-0 mt-5 text-black h-32 pb-5 md:w-1/2 ">
                        <div>
                            <img
                                src={item.url}
                                alt={item.name}
                                className=" w-24 h-24 rounded border-2 border-black"
                            />
                        </div>
                        <div className=" m-auto">
                            <h2 className="">{item.name}</h2>
                        </div>
                        <div className=" m-auto">
                            <h2 className="">{item.discountedPrice}</h2>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cart;
