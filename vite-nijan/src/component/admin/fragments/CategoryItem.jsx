import React from "react";
import Button from "../form/button/Button";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CategoryItem = ({ index, cate, deleteCategory, editCategory }) => {
  return (
    <tr className={Number.isInteger(index/2) ? "bg-white" : "bg-gray-200" } key={cate.categoryId}>
      <td className="px-6 py-2 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categoryName}</div>
      </td>
      <td className="px-6 py-2 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categorySlug}</div>
      </td>
      <td className="px-6 py-2 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categoryDescription}</div>
      </td>
      <td className="px-6 py-2 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{cate.createDate}</div>
      </td>
      <td className="px-6 py-2 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{cate.status}</div>
      </td>
      <td className="flex items-center justify-center px-6 py-2 text-sm font-medium text-right whitespace-normal gap-x-5">
        <a
          onClick={(e, id) => editCategory(e, cate.categoryId)}
          href="#"
          className="px-3 pt-2 pb-1 bg-blue-500 rounded-sm hover:cursor-pointer"
        >
          <Button><FaEdit className="w-5 h-5 text-white" /></Button>
        </a>
        <a
          onClick={(e, id) => deleteCategory(e, cate.categoryId)}
          href="#"
          className="px-3 pt-2 pb-1 bg-red-500 rounded-sm hover:cursor-pointer"
        >
          <Button><RiDeleteBin6Line className="w-5 h-5 text-white" /></Button>
        </a>
      </td>
    </tr>
  );
};

export default CategoryItem;
