import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaSearch  } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";

const NavClient = () => {
  const [cart, setCart] = useState(0);
    useEffect(() => {
      if (localStorage.getItem('cart')) {
        const storedName = JSON.parse(localStorage.getItem('cart'));
        for (let index = 0; index < storedName.length; index++) {
          const element = storedName[index];
          setCart(cart + element.productQuantity)
        }
        // localStorage.setItem('total', cart);
      } else {
        setCart(0);
      }
    }, []);
    return (
      <div className="flex items-center justify-between px-10 bg-gray-800">
        <div className="flex items-center justify-start px-5 py-3 gap-x-10">
          <NavLink
            to={"/home"}
            className="inline-block text-4xl font-bold text-white logo"
          >
            Nijan Shop
          </NavLink>
        </div>
        <div className="flex items-center justify-center search">
          <div className="flex items-center justify-center text-lg font-bold text-white gap-x-5 menu">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white px-6 bg-orange-500 py-4" : "px-6"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                isActive ? "text-white px-6 bg-orange-500 py-4" : "px-6"
              }
            >
              Product
            </NavLink>
            <span className="px-6 cursor-pointer">Blog</span>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-white px-6 bg-orange-500 py-4" : "px-6"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex">
            <button
              onClick={() => console.log(1)}
              className="z-10 px-4 transition-all translate-x-6 bg-orange-500 cursor-pointer rounded-l-3xl hover:bg-orange-400"
              type="submit"
            >
                <FaSearch className="text-white " />
            </button>
                <input
                    type="text"
                    className="w-full h-full px-8 py-2 text-black border-none rounded-full outline-none"
                    placeholder="Search..."
                />
          </div>
          <div className="flex items-center justify-between gap-5 px-3 mx-3">
            <div className="relative gap-5 cursor-pointer cart">
            <NavLink to="/cart" className="gap-5 cursor-pointer account">
              <FaCartArrowDown className=" text-white w-[24px] h-[24px]" />
            </NavLink>
              <p id="cart" className="absolute flex items-center justify-center w-4 h-4 font-bold text-center text-red-700 bg-white rounded-md -top-1 text-md -right-2">
                {cart}
              </p>
            </div>
            <NavLink to="/sign-up" className="gap-5 cursor-pointer account">
                <RiAccountPinCircleLine className="text-white w-[24px] h-[24px]" />
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavClient;
  