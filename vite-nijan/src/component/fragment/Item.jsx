import React, { useEffect, useState } from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import Button from "../admin/form/button/Button";
import { useNavigate } from "react-router-dom";
import render from "../modules/re-render";
import formatter from "../modules/formatter";

const Item = ({ price, image, cartItem, children, props }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem('cart')) {
  //     const storedName = JSON.parse(localStorage.getItem('cart'));
  //     setCart(storedName);
  //   } else {
  //     setCart([]);
  //   }
  // }, []);
  const handleAddToCart = () => {
    const cart = localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart'));
    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        if (element.productId == cartItem.productId) {
          element.productQuantity += 1;
        }
      }
      if (!cart.some((c) => c.productId == cartItem.productId)) {
        cart.push({
          productId: cartItem.productId,
          productName: cartItem.productName,
          productPrice: cartItem.productPrice,
          productQuantity: 1,
          productPicture: cartItem.pictureDtoList[0].pictureData,
          productSummary: cartItem.productSummary,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart)); 
    } else {
      let arr = [];
      arr.push({
        productId: cartItem.productId,
        productName: cartItem.productName,
        productPrice: cartItem.productPrice,
        productQuantity: 1,
        productPicture: cartItem.pictureDtoList[0].pictureData,
        productSummary: cartItem.productSummary,
      });
      localStorage.setItem("cart", JSON.stringify(arr));
    }
    render();
  }
  const handleRedirectDetail = () => {
    navigate("/detail/" + cartItem.categoryId + "/" + cartItem.productId);
  }
  return (
    <div className="bg-[#ebebeb] flex flex-col items-center mt-5 cursor-pointer gap-y-2 p-3 rounded-md shadow-lg" id={cartItem.productId}>
      <div className="w-full" onClick={handleRedirectDetail}>
        <img
          className="w-full h-[250px] object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full" onClick={handleRedirectDetail}>
        <span>{children}</span>
        <div className="flex items-center justify-between w-full">
          <small>{formatter(price)}</small>
          <div className="flex items-center gap-1 justify-centers">
          <FaHeartCirclePlus className="text-xl transition-all hover:text-red-500" />   
          </div>
        </div>

      </div>
      <Button className="flex items-center justify-center px-4 py-2 mt-2 text-sm text-gray-400 transition-all bg-blue-400 rounded-sm hover:bg-blue-300"
        onClick={handleAddToCart}
      >
            Add to cart <span><FaCartArrowDown className="w-[24px] h-[24px] pl-2" /></span>
      </Button>
    </div>
  );
};

export default Item;
