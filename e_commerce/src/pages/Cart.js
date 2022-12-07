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
        <div className=" bg-gray-100 border-t-2 border-white h-auto min-h-screen">
            {showCart ? (
                <div className="flex justify-between py-5 sticky top-16 bg-white border-b-2 border-black">

                    <div className="px-5">
                        <h2 className=" pt-2 text-lg">
                            Total :   <span className=" font-bold">${newTotal}</span>
                        </h2>
                    </div>
                    <div className="px-5">
                        <Link to="/placed">
                            <button
                                className=" bg-blue-500 p-2 rounded text-white hover:bg-white border-2 border-blue-500 hover:text-blue-500"
                                onClick={() => HandleBuy()}
                            >
                                {" "}
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-around fixed bottom-0 md:bottom-2 bg-white px-5 text-center  rounded-xl w-full md:w-auto md:right-10 md:flex-col">
                        <h2 className=" pt-2 md:text-base text-green-400">
                            Savings : <span className=" md:text-2xl">{savings}</span>
                        </h2>
                        <h2 className=" pt-2 md:text-base text-red-400">
                            Before Discount : <span className=" md:text-xl">{prevTotal}</span>
                        </h2>
                    </div>
                </div>


            ) : (
                <div className=" h-screen flex justify-center items-center">
                    <div>
                        <h1>CART IS EMPTY :( </h1>
                        <Link to="/allProducts">
                            <button className=" p-2 text-white bg-blue-500 rounded-lg hover:bg-white border-2 border-blue-500 hover:text-blue-500 mt-5">
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
                    <div className="flex  justify-between mx-auto p-4 bg-white shadow-xl rounded-xl last:mb-5 mt-5 text-black h-32 pb-5 my-5 mb-10 md:w-1/2 ">
                        <div>
                            <img
                                src={item.url}
                                alt={item.name}
                                className=" w-24 h-24 rounded"
                            />
                        </div>
                        <div className=" m-auto">
                            <h2 className="">{item.name}</h2>
                        </div>
                        <div className=" m-auto text-right">
                            <h2 className=" font-bold">$
                                {item.discountedPrice}</h2>
                        </div>
                        {/* <div ><i class="fa-solid fa-trash"></i></div> */}

                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cart;
