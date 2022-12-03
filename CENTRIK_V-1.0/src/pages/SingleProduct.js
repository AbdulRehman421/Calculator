import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../ProductContext";
import CartContext from "../CartContext";

const SingleProduct = () => {
    let showPrompt = false;
    let params = useParams();
    const { ProductItems } = useContext(ProductContext);
    const { cartItems, addToCart } = useContext(CartContext);
    console.log(cartItems);
    const singleItem = ProductItems.filter((item) => item.id == params.id);
    let random = Math.floor(Math.random() * 1000);

    const handleStocks = (stock) => {
        if (stock < 50) {
            showPrompt = true;
        }
    };
    window.scrollTo(0, 0);
    return (
        <div>
            {singleItem.map((item) => (
                <div key={item.id} className="flex flex-col w-full min-h-screen md:flex-row">
                    <div className=" md:w-40 m-5 flex md:flex-col">
                        <div className=" w-full">
                            <img src={item.thumbnail} alt={item.title} className="my-3" />
                        </div>

                        {item.images.map((img) => (
                            <div className="m-2">
                                <img src={img} alt={item.title} className="my-3" key={random} />
                            </div>
                        ))}
                    </div>
                    <div className=" m-5  md:w-1/2">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="px-4 m-4 md:px-10 md:m-10 md:md:w-1/3 text-center">
                        <div className="flex justify-between my-5">
                            <h3 className="text-sm text-green-400 font-bold">{item.discountPercentage} % Off</h3>
                            <h3 className=" text-sm text-yellow-300">{item.rating} &#9733;</h3>
                        </div>
                        <h2 className=" text-xl font-medium md:text-3xl">{item.title}</h2>

                        <div className="flex justify-between my-10">
                            <div>
                                <h3 className="text-2xl ">
                                    Rs.
                                    {(
                                        item.price -
                                        (item.discountPercentage * item.price) / 100
                                    ).toFixed(2)}
                                </h3>
                                <h2 className=" line-through mx-5 ">Rs.{item.price}</h2>
                            </div>
                            {handleStocks(item.stock)}

                            {showPrompt ? (
                                <div className=" text-center">
                                    {" "}
                                    <h3>Items left : {item.stock}</h3>{" "}
                                    <span className=" text-red-600 text-xs">
                                        Hurry! only a few item left{" "}
                                    </span>
                                </div>
                            ) : (
                                <div className=" text-center">
                                    <h3>Items left :{item.stock}</h3>
                                </div>
                            )}
                        </div>
                        <div className=" text-center m-5">
                            <Link to="/placed">
                                <button className=" p-2 bg-white rounded text-black ml-4 mt-5 mx-5">
                                    Buy Now
                                </button>
                            </Link>

                            <button
                                className=" p-2 bg-white rounded text-black ml-4 mt-5 mx-5"
                                onClick={() => {
                                    addToCart(
                                        item.id,
                                        item.title,
                                        item.price,
                                        item.discountPercentage,
                                        item.images[0]
                                    );
                                }}
                            >
                                Add to cart
                            </button>
                        </div>

                        <p className="my-10">{item.description}</p>
                        <p className=" px-10">COD Available</p>


                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleProduct;
