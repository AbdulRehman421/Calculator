import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../ProductContext";
import CartContext from "../CartContext";
import Filter from "../components/Filter";

import { useContext } from "react";
const Category = () => {
    const { ProductItems, getByCategory } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    let params = useParams();
    const productCategory = getByCategory(ProductItems, params.category);
    window.scroll(0, 0);

    return (
        <section className=" flex max-h-screen overflow-y-auto">
            <Filter className=" fixed top-0"></Filter>
            <div className="flex">
                <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-white">
                    {productCategory.map((product) => (
                        <Link
                            to={`/items/${product.id}`}
                            className=" w-1/4 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out"
                            key={product.id}
                        >
                            <div className="flex-col">
                                <div>
                                    {" "}
                                    <img
                                        src={product.thumbnail}
                                        alt=""
                                        className=" m-auto  max-h-48 w-40 rounded border-2 border-black"
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
            </div>
        </section>
    );
};

export default Category;
