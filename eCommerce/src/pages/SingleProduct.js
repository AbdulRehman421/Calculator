import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../ProductContext";
import CartContext from "../CartContext";

const SingleProduct = () => {
    let showPrompt = false;
    let params = useParams();
    const { ProductItems } = useContext(ProductContext);
    const { cartItems, addToCart } = useContext(CartContext);
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
                <div key={item.id} className="flex flex-col w-full min-h-screen md:flex-row md:justify-around">
                    <div className=" mx-5 flex flex-col md:w-1/3" >
                        <div className=" w-full flex overflow-x-auto m-3 md:w-4/5 md:mx-auto rounded">
                            {item.images.map((img) => (
                                <img src={img} alt={item.title} className=" m-3 p-5 max-h-72 rounded-3xl" key={random} />
                            ))}
                        </div>
                        <span className=" text-end md:mr-20">Swipe >>></span>


                        <div className="text-center mx-auto my-5 justify-end w-full">
                            <div className=" flex justify-evenly mx-5">
                                <Link to="/placed">
                                    <button className="  bg-blue-500 p-2 rounded text-white hover:bg-white border-2 border-blue-500 hover:text-blue-500 ml-4 mt-8 mx-5 px-4">
                                        Buy Now
                                    </button>
                                </Link>

                                <button
                                    className=" p-2 bg-white  rounded hover:bg-blue-500 border-2 border-blue-500 hover:text-white text-blue-500 ml-4 mt-8 mx-5 px-4"
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

                        </div>
                    </div>

                    <div className="px-4 m-4 md:m-10 md:md:w-1/2 ">
                        <div className="flex justify-between my-5">
                            <h3 className=" text-base text-green-500 font-bold">{item.discountPercentage} % Off</h3>
                            <h3><span className=" text-base mr-2 font-bold" >{item.rating}</span><span className=" text-sm text-yellow-400"><i class="fa-solid fa-star"></i></span></h3>
                        </div>
                        <h2 className=" text-xl font-medium md:text-3xl text-left">{item.title}</h2>

                        <div className="flex justify-between my-4 md:my-10">
                            <div>
                                <h3 className="text-2xl font-bold ">
                                    $
                                    {(
                                        item.price -
                                        (item.discountPercentage * item.price) / 100
                                    ).toFixed(2)}
                                </h3>
                                <h2 className=" line-through mx-5 ">${item.price}</h2>
                            </div>
                            {handleStocks(item.stock)}

                            {showPrompt ? (
                                <div className=" text-center md:text-right">
                                    {" "}
                                    <h3>Items left</h3>
                                    <h2 className="md:mr-5 font-semibold">
                                        {item.stock}
                                    </h2>
                                    <span className=" text-red-600 text-xs">
                                        Hurry! only a few item left{" "}
                                    </span>
                                </div>
                            ) : (
                                <div className=" text-center md:text-right">
                                    <h3>
                                        Items left
                                    </h3>
                                    <h2 className="md:mr-5  font-semibold">
                                        {item.stock}
                                    </h2>
                                </div>
                            )}
                        </div>


                        <p className="my-10">{item.description}</p>
                        <p className=" px-10 text-center md:my-24">COD Available</p>


                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default SingleProduct;
