import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";

const AllProducts = () => {
    return (
        <div className=" static">
            <div className=" flex flex-col md:flex-row">
                <Filter></Filter>
                <Card />
            </div>
        </div>
    );
};

export default AllProducts;
