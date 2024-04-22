import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Item = ({ price, image, children, props }) => {
  return (
    <div className="bg-[#ebebeb] flex flex-col my-5 cursor-pointer gap-y-2 p-3 rounded-md shadow-lg">
      <div>
        <img
          className="w-full h-[250px] object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start ">
        <span>{children}</span>
        <div className="flex items-center justify-between w-full">
          <small>{price}vnđ</small>
          <div className="flex items-center gap-1 justify-centers">
          <FaHeartCirclePlus className="text-xl transition-all hover:text-red-500" />
          <div className="px-[10px] text-white rounded-full hover:bg-orange-700 transition-all py-[2px] flex justify-center items-center text-lg bg-orange-500">
            +
          </div>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
