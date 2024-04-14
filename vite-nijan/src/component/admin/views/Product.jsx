import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../fragments/ProductItem";
import { VscDebugStart } from "react-icons/vsc";

const Product = () => {
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/add-product");
  };
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // try {
      //   const response = await ProductService.getAllProduct();
      //   setProduct(response.data);
      // } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  const deleteProduct = (e, id) => {
    e.preventDefault();
    // ProductService.deleteProduct(id).then((res) => {
    //   if (product) {
    //     setProduct((prev) => {
    //       return prev.filter((product) => product.id !== id);
    //     });
    //   }
    // });
  };
  const editProduct = (e, id) => {
    e.preventDefault();
    navigate(`/product/edit/${id}`);
  };
  console.log(product);
  return (
    <div className="w-full h-full mx-auto ">
      <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
        <span>Home</span> <VscDebugStart /> <span>Product</span>
      </div>
      <div className="h-12">
        <button
          className="px-6 py-3 font-semibold text-white transition-all bg-blue-500 rounded shadow-2xl hover:bg-blue-400"
          style={{ fontSize: "16px" }}
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="flex mt-5 border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Title
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Short Desc
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Description
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Price
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Price Sale
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Quantity
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                Created Date
              </th>
              <th className="px-6 py-3 text-lg font-semibold tracking-wider text-center text-black uppercase border-gray-500">
                Action
              </th>
            </tr>
          </thead>
          {!loading && product != null > 0 && (
            <tbody>
              {/* {product.map((product) => (
                <ProductItem
                  product={product}
                  key={product.id}
                  // eslint-disable-next-line no-undef
                  deleteProduct={deleteProduct}
                  // eslint-disable-next-line no-undef
                  editProduct={editProduct}
                ></ProductItem>
              ))} */}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Product;
