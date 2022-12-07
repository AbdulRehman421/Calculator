import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Purchased = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert("order Placed !!!");
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section class="container mx-auto px-6 p-10 text-center items-center pb-5 min-h-screen">
            <h2 class="text-4xl font-bold  text-gray-300 mb-8">
                Thank You For Shoping with Us :-)
            </h2>
            <div class="items-center mb-20  mt-20 pb-1">
                <h4 class="text-2xl text-gray-300 font-bold mb-3">
                    You Will Recive Your Order in Next 24 Hrs ...
                </h4>
                <Link to="/allProducts">
                    <button className=" p-2 bg-white rounded text-black ml-4 mt-5">
                        Lets Save More...
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Purchased;
