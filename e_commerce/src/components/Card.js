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
            <div className=" py-5 w-full  bg-white">
                <form action="#" className=" flex justify-end">
                    <select
                        className="mx-5 w-40 p-2 bg-slate-50 text-black border-2 border-black rounded"
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

            <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-black">
                {filterProduct.map((product) => (
                    <Link
                        to={`/items/${product.id}`}
                        className=" p-5  m-5 rounded-lg bg-white  hover:scale-105 ease-in-out md:w-1/4  drop-shadow-2xl"
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
                                    {" "}
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
    );
};

export default Card;
