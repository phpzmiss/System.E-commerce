import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import Button from "../admin/form/button/Button";

const Item = ({ price, image, children, props }) => {
  return (
    <div className="bg-[#ebebeb] flex flex-col items-center my-5 cursor-pointer gap-y-2 p-3 rounded-md shadow-lg">
      <div className="w-full">
        <img
          className="w-full h-[250px] object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <span>{children}</span>
        <div className="flex items-center justify-between w-full">
          <small>{price}vnđ</small>
          <div className="flex items-center gap-1 justify-centers">
          <FaHeartCirclePlus className="text-xl transition-all hover:text-red-500" />   
          </div>
        </div>

      </div>
      <Button className="flex items-center justify-center px-4 py-2 mt-2 text-sm text-gray-400 transition-all rounded-sm bg-slate-300 hover:bg-slate-200">
            Add to cart <span><FaCartArrowDown className="w-[24px] h-[24px] pl-2" /></span>
      </Button>
    </div>
  );
};

export default Item;
