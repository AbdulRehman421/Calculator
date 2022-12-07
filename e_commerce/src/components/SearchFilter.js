import React from "react";
import { useState } from "react";
import ProductContext from "../ProductContext";
import { useContext } from "react";

const SearchFilter = () => {
    const { ProductItems } = useContext(ProductContext);

    const [filterProduct, setFilterProduct] = useState(ProductItems);
    console.log(filterProduct);

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
            default:
                return ProductItems;
        }
    }
    function sorting(e) {
        let sortby = e.target.value;
        console.log(sortData(sortby));
    }

    return (
        <div className="flex justify-end my-5  border-black border-solid  ">
            <form action="#">
                <input
                    type="text"
                    placeholder="Search "
                    className="p-2  bg-slate-50 text-black w-60 rounded"
                />
                <select
                    className="mx-5 w-40 p-2 bg-slate-50 text-black border-0 rounded"
                    name="sort"
                    id="sort"
                    onChange={sorting}
                >
                    <option value="#">Sort by</option>
                    <option value="rating">Rating</option>
                    <option value="discount">Discount</option>
                    <option value="prize">Prize</option>
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
