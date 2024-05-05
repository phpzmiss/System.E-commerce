import React, { useEffect, useState } from "react";
import { Navigate, parsePath, useNavigate } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";
import CategoryService from "../../modules/CategoryService";
import CategoryItem from "../fragments/CategoryItem";

const Category = () => {
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate("/admin/add-category");
  };
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState({
    pageNo: 0,
    pageSize: 5,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
  });
  const [responsePage, setResponsePage] = useState({
    last: true,
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const deleteCategory = (e, id) => {
    e.preventDefault();
    CategoryService.deleteCategory(id).then((res) => {
      if (category) {
        setCategory((prev) => {
          return prev.filter((category) => category.categoryId !== id);
        });
      }
    });
  };
  const editCategory = (e, id) => {
    e.preventDefault();
    navigate(`/admin/edit-category/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoryService.getAllPageable(page);
        if (response.data.code == 200) {
          setCategory(response.data.result.result);
          setResponsePage(response.data.result);
        }
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full mx-auto">
      <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
        <span>Home</span> <VscDebugStart /> <span className="font-bold bg">Category</span>
      </div>
      <div className="w-full h-12 text-right">
        <button
          className="px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded shadow-2xl hover:bg-blue-400"
          style={{ fontSize: "14px" }}
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>
      <div className="flex mt-5 border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Title
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Slug
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Description
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Created Date
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-gray-500">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {category.map((cate, index) => (
                <CategoryItem
                  index={index}
                  cate={cate}
                  deleteCategory={deleteCategory}
                  editCategory={editCategory}
                ></CategoryItem>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <nav className="mt-2">
        <ul className="flex items-center justify-end">
          <li className="page-item">Prev</li>
          <li className="page-item page-active">1</li>
          {!loading && (
              responsePage.map((page, index) => (
                <li className="page-item page-active">{index}</li>
              ))
          )}
          <li className="page-item">Next</li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;