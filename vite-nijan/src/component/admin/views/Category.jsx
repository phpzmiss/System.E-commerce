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
    pageSize: 10,
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
  const [pageLoop, setPageLoop] = useState([]);
  const [pagePrev, setPagePrev] = useState(true);
  const [pageNext, setPageNext] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoryService.getAllPageable(page);
        if (response.data.code == 200) {
          setCategory(response.data.result.result);
          setResponsePage(response.data.result);
          const items = [];
          for (let i = 0; i < response.data.result.totalPages; i++) {
            items.push(i+1);
          }
          setPageLoop(items);
          setLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  const changePage = async (e, pageNo) => {
    try {
      page.pageNo = pageNo - 1;
      const response = await CategoryService.getAllPageable(page);
      if (response.data.code == 200) {
        setCategory(response.data.result.result);
        setResponsePage(response.data.result);
        const items = [];
        for (let i = 0; i < response.data.result.totalPages; i++) {
          items.push(i+1);
        }
        setPageLoop(items);
      }
    } catch (error) {}
  }

  const changePrev = async () => {
    if (pagePrev == true && responsePage.pageNo > 0) {
      try {
        page.pageNo = responsePage.pageNo - 1;
        const response = await CategoryService.getAllPageable(page);
        if (response.data.code == 200) {
          setCategory(response.data.result.result);
          setResponsePage(response.data.result);
          const items = [];
          for (let i = 0; i < response.data.result.totalPages; i++) {
            items.push(i+1);
          }
          setPageLoop(items);
        }
        if (page.pageNo) {
          setPageNext(true);
          setPagePrev(false);
        }
      } catch (error) {}
    }
  }

  const changeNext = async () => {
    if (pageNext == true && responsePage.pageNo + 1 < responsePage.totalPages) {
      try {
        page.pageNo = responsePage.pageNo + 1;
        const response = await CategoryService.getAllPageable(page);
        if (response.data.code == 200) {
          setCategory(response.data.result.result);
          setResponsePage(response.data.result);
          const items = [];
          for (let i = 0; i < response.data.result.totalPages; i++) {
            items.push(i+1);
          }
          setPageLoop(items);
        }
        if (page.pageNo == responsePage.totalPages) {
          setPageNext(false);
          setPagePrev(true);
        }
      } catch (error) {}
    }
  }
  

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
          <li className="select-none page-item bg-slate-100" onClick={changePrev}>Prev</li>
          {!loading && (
              pageLoop.map((page, index) => (
                <li className={"select-none page-item " + (responsePage.pageNo + 1 == page ? 'page-active' : '')} key={index} onClick={(e) => changePage(e, page)}>{page}</li>
              ))
          )}
          <li className="select-none page-item bg-slate-100" onClick={changeNext}>Next</li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;