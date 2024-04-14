import React, { useEffect, useState } from "react";
import { Navigate, parsePath, useNavigate } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";

const Category = () => {
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate("/add-category");
  };
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  // const deleteCategory = (e, id) => {
  //   e.preventDefault();
  //   CategoriesService.deleteCategory(id).then((res) => {
  //     if (category) {
  //       setCategory((prev) => {
  //         return prev.filter((category) => category.id !== id);
  //       });
  //     }
  //   });
  // };
  // const editCategory = (e, id) => {
  //   e.preventDefault();
  //   navigate(`/editCategory/${id}`);
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await CategoriesService.getCategory();
  //       setCategory(response.data);
  //     } catch (error) {}
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="w-full h-full mx-auto">
      <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
        <span>Home</span> <VscDebugStart /> <span>Category</span>
      </div>
      <div className="h-12">
        <button
          className="px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded shadow-2xl hover:bg-blue-400"
          style={{ fontSize: "16px" }}
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
      <div className="flex mt-5 border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Category name
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Title
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Description
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Created Date
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-gray-500">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {category.map((cate) => (
                <Category
                  cate={cate}
                  key={cate.id}
                  deleteCategory={deleteCategory}
                  editCategory={editCategory}
                ></Category>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Category;