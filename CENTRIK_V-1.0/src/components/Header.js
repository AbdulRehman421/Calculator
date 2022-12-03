import React from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    return (
        <header className=" flex justify-between py-4 px-4 sticky  top-0 bg-gray-900 text-white z-10 border-b-2 border-white">
            <div className=" hover:text-orange-500">
                <span
                    className=" ml-10 cursor-pointer text-xl"
                    onClick={() => navigate(-1)}
                >
                    {" "}
                    <i className="fa fa-arrow-left mt-2 mr-2" aria-hidden="true"></i>{" "}
                </span>
            </div>
            <div className=" hover:text-orange-500">
                <NavLink to="/">
                    <h2>Home</h2>
                </NavLink>
            </div>
            <div className=" hover:text-orange-500">
                <NavLink to="/allProducts">
                    <h2>Explore</h2>
                </NavLink>
            </div>
            <div className=" hover:text-orange-500">
                <NavLink to="/about">
                    <h2>About</h2>
                </NavLink>
            </div>
            <div className=" hover:text-orange-500">
                <NavLink to="/contact">
                    <h2>Contact</h2>
                </NavLink>
            </div>
            <NavLink to="/cart">
                <span className=" hover:text-orange-500">
                    <i className="fa-solid fa-bag-shopping m-2"></i>
                    <span>{cartItems.length}</span>
                </span>
            </NavLink>
        </header>
    );
};

export default Header;
