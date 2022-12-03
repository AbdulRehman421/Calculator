import React from "react";
import { useContext } from "react";
import ProductContext from "../ProductContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filter = () => {
    const [showfilter, useShowFilter] = useState(false);
    const { ProductItems } = useContext(ProductContext);
    function uniqueData(data, property) {
        let temp = data.map((item) => {
            return item[property];
        });
        temp = [...new Set(temp)];
        return temp;
    }
    let uniqueBrands = uniqueData(ProductItems, "brand");
    let uniqueCategory = uniqueData(ProductItems, "category");

    const HandleFilter = () => {
        useShowFilter((current) => !current);
    };
    return (
        <>
            {
                <div className="border-t-2 border-white">
                    {showfilter ? (
                        <div className="filter flex-col border-3 border-white bg-slate-50 text-black ">
                            <span
                                span
                                className=" float-right p-5 text-2xl"
                                onClick={HandleFilter}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </span>
                            <span className=" mx-24 my-5">
                                <Link to="/allProducts">
                                    <button className="p-2 bg-gray-900 rounded text-white ml-4 m-5 px-10 h-10">
                                        Reset
                                    </button>
                                </Link>
                            </span>
                            <div className=" w-1/3 mx-5 flex mt-3">
                                <div>
                                    <h2 className=" mx-5 text-xl font-medium mb-3"> Brands</h2>

                                    {uniqueBrands.map((item) => (
                                        <Link key={item.id} to={`/brand/${item}`}>
                                            <div>
                                                <div className="p-2 text-xs"> {item.toUpperCase()}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div>
                                    <h2 className=" mx-5 text-xl font-medium mb-3">
                                        {" "}
                                        Categoties
                                    </h2>

                                    {uniqueCategory.map((item) => (
                                        <Link key={item.id} to={`/categories/${item}`}>
                                            <div>
                                                <div className="p-2 text-xs"> {item.toUpperCase()}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className=" m-5 fixed top-16 text-3xl" onClick={HandleFilter}>
                            <i className="fa-solid fa-filter"></i>
                        </div>
                    )}
                </div>
            }
        </>
    );
};

export default Filter;
