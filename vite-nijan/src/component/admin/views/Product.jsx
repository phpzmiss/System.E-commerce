import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../fragments/ProductItem";
import { VscDebugStart } from "react-icons/vsc";
import ProductService from "../../modules/ProductService";
import Pagination from "react-js-pagination";
import TableRow from "react-js-pagination";

const Product = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/admin/add-product");
  };
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [page, setPage] = useState({
    pageNo: 0,
    pageSize: 10,
    sortDirection: "ASC",
    sortBy: "product_id",
    searchValue: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
          const items = [];
          for (let i = 0; i < response.data.result.totalPages; i++) {
            items.push(i+1);
          }
          setPageLoop(items);
          setLoading(false);
        }
        console.log(response);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const deleteProduct = (e, id) => {
    e.preventDefault();
    ProductService.deleteProduct(id).then((res) => {
      if (product) {
        setProduct((prev) => {
          return prev.filter((product) => product.productId !== id);
        });
      }
    });
  };
  const editProduct = (e, productId, categoryId) => {
    e.preventDefault();
    navigate(`/admin/edit-product/${categoryId}/${productId}`);
  };

  const [responsePage, setResponsePage] = useState({
    last: true,
    pageNo: 0,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const [pageLoop, setPageLoop] = useState([]);
  const [pagePrev, setPagePrev] = useState(true);
  const [pageNext, setPageNext] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          OrderService.getAll(page)
          .then(function (response) {
            setItems(response.data.result.result[0]);
            const items = [];
            for (let i = 0; i < response.data.result.totalPages; i++) {
              items.push(i+1);
            }
            setPageLoop(items);
            setLoading(false);
          });
        } catch (error) {}
      };
      fetchData();

    }, []);

  const handleChangeProduct = (e, id) => {
    OrderService.update(id, e.target.value)
    .then((res) => {
      if (res.data.code == 200) {
        try {
          OrderService.getAll(page)
          .then(function (response) {
            setItems(response.data.result.result[0]);
            setLoading(false);
          });
        } catch (error) {}
      }
    })
    
  }

  const changePage = async (e, pageNo) => {
    try {
      page.pageNo = pageNo - 1;
      const response = await ProductService.getAllPageable(page);
      if (response.data.code == 200) {
        setProduct(response.data.result.result);
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
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
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
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
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
    <div className="w-full h-full mx-auto ">
      <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
        <span>Home</span> <VscDebugStart /> <span>Product</span>
      </div>
      <div className="w-full h-12 text-right">
        <button
          className="px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded shadow-2xl hover:bg-blue-400"
          style={{ fontSize: "14px" }}
          onClick={handleAddProduct}
        >
          Add Product
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
                Summary
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Price
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Price Sale
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Quantity
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Created Date
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-gray-500">
                Action
              </th>
            </tr>
          </thead>
          {!loading && product != null && (
            <tbody>
              {product.map((p, index) => (
                <ProductItem
                  key={index}
                  product={p}
                  index={index}
                  // eslint-disable-next-line no-undef
                  deleteProduct={deleteProduct}
                  // eslint-disable-next-line no-undef
                  editProduct={editProduct}
                ></ProductItem>
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

export default Product;
