import React, { useEffect, useState } from "react";
import Taskbar from "../fragment/Taskbar";
import Item from "../fragment/Item";
import ItemNews from "../fragment/ItemNews";
import CommonItems from "../fragment/CommonItems";
import { useCard } from "../modules/cart-context";
import Breadcrumbs from "../admin/fragments/Breadcrumbs";
import ProductService from "../modules/ProductService";
import Banner from "../../assets/banner.png";
import Default from "../../assets/default.png";

const ProductClient = () => {
  // const { product, setProduct } = useCard();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [page, setPage] = useState({
    pageNo: 0,
    pageSize: 20,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
  });
  const [filter, setFilter] = useState({
    pageNo: 0,
    pageSize: 20,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
    categoryId: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
        }
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const handleChangeData  = async (categoryId) => {
    setActiveCategory(categoryId);
    filter.categoryId = categoryId;
    try {
      const response = await ProductService.getAllFilter(filter);
      if (response.data.code == 200) {
        setProduct(response.data.result.result);
      }
      setLoading(false);
    } catch (error) {}
  }

  return (
    <section class='pt-[100px]'>
      <Breadcrumbs redirect="Product" />
      <div className="my-3 shadow-2xl page-container">
            <img
              src={Banner}
              alt=""
              className="w-full h-[400px] object-cover rounded-lg"
            />
      </div>
      <div className="grid grid-cols-4 gap-4 page-container">
        <Taskbar handleChangeData={handleChangeData} activeCategory={activeCategory}></Taskbar>
        <div className="col-span-3 my-3">
          <CommonItems title="Product" className="my-4">
           {!loading && product?.length > 0 ? (<div className="grid grid-cols-4 gap-x-4 gap-y-1">
            {!loading && product != null && product?.length > 0 && (
              product.map((p) => (
                <Item
                  image={p.pictureDtoList != null && p.pictureDtoList?.length >0 && p.pictureDtoList[0].pictureData != "" ? p.pictureDtoList[0].pictureData : Default}
                  key={p.productId}
                  cartItem={p}
                  price={p.productPrice}
                  product={item}
                >
                  {p.productTitle}
                </Item>
              ))
            )}
            </div>) : (<div className="py-2 text-2xl font-bold text-center">No product</div>)}
          </CommonItems>
          <CommonItems title="News" className="my-3">
            <div className="grid grid-cols-3 my-3 gap-x-3">
              <ItemNews
                button="More"
                image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              >
                This is a new space.
              </ItemNews>
              <ItemNews
                button="More"
                image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              >
                This is a new space.
              </ItemNews>
              <ItemNews
                button="More"
                image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              >
                This is a new space.
              </ItemNews>
            </div>
          </CommonItems>
        </div>
      </div>
    </section>

  );
};

export default ProductClient;
