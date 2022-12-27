import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className=" flex items-center w-full justify-evenly mt-12 pb-12 sm:text-sm  flex-col-reverse border-b-2 border-black">
            <div className=" w-full text-center sm:text-center">
                <div className=" sm:ml-0 sm:mt-7 sm:text-lg"> <Link to="/allProducts">
                    <button className=" p-1 border-2 border-blue-500 bg-blue-500 text-white rounded px-5 py-2 mt-8 shadow-sm hover:bg-white hover:text-blue-500">
                        Lets Save !!!
                    </button>
                </Link></div>
                <p className=" m-5 p-5 text-sm ">
                    We made Shopping Simpler and Happier :-)
                </p>

            </div>
            <div className=" w-2/3 md:w-1/3">
                <img src="/images/hero.jpg" alt="HERO IMG" className=" rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default Hero;
