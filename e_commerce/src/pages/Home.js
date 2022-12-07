import React from "react";
import Hero from "../components/Hero";
import Rows from "../components/Rows";
import ProductContext from "../ProductContext";
import { useContext } from "react";
const Home = () => {
    const { ProductItems } = useContext(ProductContext);
    const categories = ProductItems.map((item) => item.category);
    let filterdCategories = [...new Set(categories)];
    return (
        <div className=" flex-col">
            <Hero></Hero>
            {filterdCategories.map((category) => (
                <Rows category={category} key={category}></Rows>
            ))}
        </div>
    );
};

export default Home;
