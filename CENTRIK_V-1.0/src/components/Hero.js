import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className=" flex items-center w-full justify-evenly mt-12 pb-12 sm:text-sm  flex-col-reverse">
            <div className=" w-full text-center sm:text-center">
                <div className="sm:text-sm  sm:ml-0 sm:mt-7 sm:text-lg"> <Link to="/allProducts">
                    <button className=" p-1 bg-white rounded text-black mt-8">
                        Lets Save !!!
                    </button>
                </Link></div>
                <p className=" m-5 p-5 text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
                    voluptatem soluta labore consequatur illo ipsa illum eveniet est
                    excepturi?
                </p>

            </div>
            <div className=" w-2/3 md:w-1/3">
                <img src="/images/heroo.jpg" alt="HERO IMG" className=" rounded-lg" />
            </div>
        </div>
    );
};

export default Hero;
