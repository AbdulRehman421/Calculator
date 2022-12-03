import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className=" flex items-center w-full justify-evenly mt-32 pb-36">
            <div className=" w-1/3">
                <h1 className=" text-6xl ml-16">E-Shoper</h1>
                <p className=" m-5 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
                    voluptatem soluta labore consequatur illo ipsa illum eveniet est
                    excepturi?
                </p>
                <Link to="/allProducts">
                    <button className=" p-2 bg-white rounded text-black ml-10 mt-5">
                        Lets Save !!!
                    </button>
                </Link>
            </div>
            <div className=" w-1/3">
                <img src="/images/heroo.jpg" alt="HERO IMG" className=" rounded-lg" />
            </div>
        </div>
    );
};

export default Hero;
