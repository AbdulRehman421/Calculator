import React from "react";
import { useContext } from "react";
import ProductContext from "../ProductContext";


const Filter = () => {
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

    return (
        <div className="flex-col">
            <span className=" mx-24 my-5">
                <button className="py-2 px-8 border-2 border-black rounded h-10">
                    {" "}
                    Reset
                </button>
            </span>
            <div div className=" w-1/3 mx-5 flex">
                <div>
                    <h2 className=" mx-5 text-xl font-medium mb-3"> Brands</h2>

                    {uniqueBrands.map((item) => (
                        <div>
                            <div className="p-2"> {item}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className=" mx-5 text-xl font-medium mb-3"> Categoties</h2>

                    {uniqueBrands.map((item) => (
                        <div>
                            <div className="p-2"> {item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
