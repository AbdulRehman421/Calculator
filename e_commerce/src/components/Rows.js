import React from "react";
import ProductContext from "../ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
const Rows = (props) => {
    const { ProductItems } = useContext(ProductContext);
    const { getByCategory } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    let filteredCategories = getByCategory(ProductItems, props.category);
    return (
        <div >
            <h1 className=" m-5 text-xl md:text-2xl text-black "> {props.category.toUpperCase()}</h1>

            <div className=" flex overflow-x-auto ">
                {filteredCategories.map((product) => (
                    <Link
                        to={`/items/${product.id}`}
                        className=" p-5  drop-shadow-xl m-5  bg-white rounded-lg hover:scale-105 ease-in-out text-black "
                        key={product.id}
                    >
                        <div className="flex-col w-56 ">
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
                                <h3><span className=" text-sm text-yellow-400"><i class="fa-solid fa-star"></i></span><span className=" text-sm ml-1" >{product.rating}</span></h3>                            </div>
                            <div className=" flex justify-between m-5">
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
    );
};

export default Rows;
