import React, { Component } from 'react'
import { MdOutlineMail,MdLocationOn, MdOutlineAccountCircle   } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiSolidDiscount } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const NavAddress = ({ className }) => {
    return (
      <div
        className={`flex items-center justify-around py-2 gap-14 bg-white shadow-lg text-black ${className}`}
      >
        <div>
            <span className="flex items-center"><MdOutlineMail className='text-orange-500 ' /> <small  className="pl-2">support@shopnijan.com</small></span>
        </div>
        <div className='flex items-center justify-end gap-4'>
            <span className="flex items-center gap-1 cursor-pointer"><MdLocationOn className='mb-1 text-orange-500' /> <small>Store location</small></span>
            <span className="flex items-center gap-1 cursor-pointer"><BiSolidDiscount className='text-orange-500 ' /> <small>Daily deal</small></span>
            <NavLink to="/sign-up" className="gap-5 cursor-pointer account">
              <span className="flex items-center gap-1 cursor-pointer"><MdOutlineAccountCircle className='text-orange-500 ' /> <small>My account</small></span>
            </NavLink>
            <NavLink to="/sign-in" className="gap-5 cursor-pointer account">
              <span className="flex items-center gap-1 cursor-pointer"><RiLoginCircleLine className='text-orange-500 ' /> <small>Login</small></span>
            </NavLink>
        </div>
      </div>
    );
  };
  
  export default NavAddress;
  