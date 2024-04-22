import React from "react";
import Button from "../form/button/Button";

const CategoryItem = ({ cate, deleteCategory, editCategory }) => {
  return (
    <tr className="bg-white" key={cate.id}>
      <td className="px-6 py-4 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categoriesName}</div>
      </td>
      <td className="px-6 py-4 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categoryName}</div>
      </td>
      <td className="px-6 py-4 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.categoryDescription}</div>
      </td>
      <td className="px-6 py-4 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.created_date}</div>
      </td>
      <td className="px-6 py-4 text-left whitespace-normal">
        <div className="text-sm text-gray-500">{cate.status}</div>
      </td>
      <td className="flex items-center justify-center px-6 py-4 text-sm font-medium text-right whitespace-normal gap-x-5">
        <a
          onClick={(e, id) => editCategory(e, cate.id)}
          href="#"
          className="px-5 py-3 text-center text-indigo-900 bg-indigo-400 hover:text-indigo-600 hover:cursor-pointer"
        >
          <Button>Edit</Button>
        </a>
        <a
          onClick={(e, id) => deleteCategory(e, cate.id)}
          href="#"
          className="px-5 py-3 text-indigo-600 bg-red-500 hover:text-indigo-800 hover:cursor-pointer"
        >
          <Button>Delete</Button>
        </a>
      </td>
    </tr>
  );
};

export default CategoryItem;
