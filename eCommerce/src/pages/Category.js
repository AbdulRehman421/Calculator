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
        <section className=" flex flex-col max-h-screen overflow-y-auto md:flex-row">
            <Filter className=" fixed top-0"></Filter>
            <div className="flex">
                <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-white">
                    {productCategory.map((product) => (
                        <Link
                            to={`/items/${product.id}`}
                            className=" mt-20 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 md:w-1/4  rounded hover:scale-105 ease-in-out"
                            key={product.id}
                        >
                            <div className="flex-col ">
                                <div>
                                    {" "}
                                    <img
                                        src={product.thumbnail}
                                        alt=""
                                        className=" m-auto h-48 w-56 rounded"
                                    />
                                </div>
                                <h2 className=" p-2"> {product.title}</h2>
                                <div className="flex justify-between m-5">
                                    <h3 className="text-sm text-green-500 font-bold">{product.discountPercentage} % Off</h3>
                                    <h3><span className=" text-sm text-yellow-400"><i class="fa-solid fa-star"></i></span><span className=" text-sm ml-1" >{product.rating}</span></h3>
                                </div>
                                <div className=" flex justify-between items-center m-5">
                                    <h2 className=" font-bold">$

                                        {(
                                            product.price -
                                            (product.discountPercentage * product.price) / 100
                                        ).toFixed(2)}
                                    </h2>
                                    <button className=" text-blue-500 text-2xl ml-4  drop-shadow-xl"
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
                                        <i className="fa-solid fa-bag-shopping"></i>
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
