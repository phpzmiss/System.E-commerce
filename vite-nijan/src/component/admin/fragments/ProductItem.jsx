import React from "react";
import Button from "../form/button/Button";

const ProductItem = ({ product, deleteProduct, editProduct }) => {
  return (
    <tr className="bg-white" key={product.id}>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.title}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.shortDescription}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">
          {product.detailsDescription}
        </div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.price}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.priceSale}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.quantity}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{product.created_date}</div>
      </td>
      <td className="flex items-center justify-center px-6 py-4 text-sm font-medium text-right whitespace-normal gap-x-5">
        <a
          onClick={(e, id) => editProduct(e, product.id)}
          href="#"
          className="px-5 py-3 text-center text-indigo-900 bg-indigo-400 hover:text-indigo-600 hover:cursor-pointer"
        >
          <Button>Edit</Button>
        </a>
        <a
          onClick={(e, id) => deleteProduct(e, product.id)}
          href="#"
          className="px-5 py-3 text-indigo-600 bg-red-500 hover:text-indigo-800 hover:cursor-pointer"
        >
          <Button>Delete</Button>
        </a>
      </td>
    </tr>
  );
};

export default ProductItem;
