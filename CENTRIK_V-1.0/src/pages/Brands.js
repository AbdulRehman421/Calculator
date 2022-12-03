import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../ProductContext";
import CartContext from "../CartContext";
import Filter from "../components/Filter";
import { useContext } from "react";
const Brands = () => {
    const { ProductItems, getBrand } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    let params = useParams();
    const productCategory = getBrand(ProductItems, params.brand);
    window.scroll(0, 0);
    return (
        <section className=" flex overflow-y-auto min-h-screen">
            <Filter className=" fixed top-0"></Filter>

            <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-white w-full ">
                {productCategory.map((product) => (
                    <Link
                        to={`/items/${product.id}`}
                        className=" wt-1/3 mt-20 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out max-h-80"
                        key={product.id}
                    >
                        <div className="flex-col max-h-min">
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
        </section>
    );
};

export default Brands;
