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
    pageSize: 5,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
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
    navigate(`/admin/edit-product?category_id=${categoryId}&product_id=${productId}`);
  };
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
                Short Desc
              </th>
              <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Description
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
              {product.map((p) => (
                <ProductItem
                  product={p}
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
    </div>
  );
};

export default Product;
