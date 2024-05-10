import React from "react";
import Button from "../form/button/Button";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductItem = ({ product, index, deleteProduct, editProduct }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <tr className={Number.isInteger(index/2) ? "bg-white" : "bg-gray-200" }>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.productTitle}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.productSummary}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.productPrice}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{formatter.format(product.productPrice - product.productDiscountValue)}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.quantity}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.createdAt}</div>
      </td>
      <td className="flex items-center justify-center px-6 py-4 text-sm font-medium text-right whitespace-normal gap-x-5">
        <a
          onClick={(e) => editProduct(e, product.productId, product.categoryId)}
          href="#"
          className="px-3 pt-2 pb-1 bg-blue-500 rounded-sm hover:cursor-pointer"
        >
          <Button><FaEdit className="w-5 h-5 text-white" /></Button>
        </a>
        <a
          onClick={(e, id) => deleteProduct(e, product.productId)}
          href="#"
          className="px-3 pt-2 pb-1 bg-red-500 rounded-sm hover:cursor-pointer"
        >
          <Button><RiDeleteBin6Line className="w-5 h-5 text-white" /></Button>
        </a>

      </td>
    </tr>
  );
};

export default ProductItem;
