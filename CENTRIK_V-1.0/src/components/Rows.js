import React from "react";
import ProductContext from "../ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
const Rows = (props) => {
    const { ProductItems } = useContext(ProductContext);
    const { getByCategory } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    let answer = getByCategory(ProductItems, props.category);
    return (
        <>
            <h1 className=" m-5 text-xl md:text-2xl"> {props.category.toUpperCase()}</h1>

            <div className=" flex overflow-x-auto">
                {answer.map((product) => (
                    <Link
                        to={`/items/${product.id}`}
                        className=" p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out text-black"
                        key={product.id}
                    >
                        <div className="flex-col w-56 md:w-full ">
                            <div>
                                {" "}
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                    className=" m-auto  h-48 w-40 rounded border-2 border-black"
                                />
                            </div>
                            <h2 className=" p-2"> {product.title}</h2>
                            <div className=" flex justify-between m-5">
                                <h2>
                                    {" "}
                                    {(
                                        product.price -
                                        (product.discountPercentage * product.price) / 100
                                    ).toFixed(2)}
                                </h2>
                                <button
                                    onClick={(e) =>
                                        addToCart(
                                            product.id,
                                            product.title,
                                            product.price,
                                            product.discountPercentage,
                                            product.images[0]
                                        ) || e.preventDefault()
                                    }
                                >
                                    {" "}
                                    <i className="fa-solid fa-bag-shopping m-2"></i>
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Rows;
