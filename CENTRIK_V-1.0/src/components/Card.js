import { React } from "react";
import CartContext from "../CartContext";
import ProductContext from "../ProductContext";
import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = () => {
    let { ProductItems } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [filterProduct, setFilterProduct] = useState(ProductItems);
    const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

    setTimeout(() => {
        setFilterProduct(ProductItems);
    }, 1);

    function sortData(items) {
        switch (items) {
            case "rating":
                return ProductItems.sort(function (a, b) {
                    return b.rating - a.rating;
                });
            case "discount":
                return ProductItems.sort(function (a, b) {
                    return b.discountPercentage - a.discountPercentage;
                });
            case "prize":
                return ProductItems.sort(function (a, b) {
                    return a.price - b.price;
                });
            case "#":
                return ProductItems;

            default:
                return ProductItems;
        }
    }

    return (
        <div className=" flex flex-col">
            <div className=" my-5 w-full  ">
                <form action="#" className=" flex justify-end">
                    <select
                        className="mx-5 w-40 p-2 bg-slate-50 text-black border-0 rounded"
                        name="sort"
                        id="sort"
                        onChange={(e) => {
                            let value = e.target.value;
                            setFilterProduct(sortData(value));

                            forceUpdate();
                        }}
                    >
                        <option value="#" disabled>
                            Sort by
                        </option>
                        <option value="rating">Rating</option>

                        <option value="discount">Discount</option>

                        <option value="prize">Prize</option>
                    </select>
                </form>
            </div>

            <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-white">
                {filterProduct.map((product) => (
                    <Link
                        to={`/items/${product.id}`}
                        className=" w-1/4 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out"
                        key={product.id}
                    >
                        <div className="flex-col  ">
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
        </div>
    );
};

export default Card;
