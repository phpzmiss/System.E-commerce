import React, { useEffect, useState } from 'react'
import Slider from '../fragment/Slider'
import DiscoverItem from '../admin/fragments/DiscoverItem'
import ProductArea from '../admin/fragments/ProductArea'
import TabArea from '../admin/fragments/TabArea'
import CommonItems from '../fragment/CommonItems'
import Item from '../fragment/Item'
import Subscribe from '../admin/fragments/Subscribe'
import ShopService from '../admin/fragments/ShopService'
import ShopBlog from '../admin/fragments/ShopBlog'
import SingleList from '../fragment/SingleList'
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import item4 from "../../assets/item4.png";
import item5 from "../../assets/item5.png";
import item6 from "../../assets/item6.png";
import ProductService from '../modules/ProductService'
import Default from "../../assets/default.png";

const HomeClient = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [productLoad, setProductLoad] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [page, setPage] = useState({
    pageNo: 0,
    pageSize: 4,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
  });
  const [filter, setFilter] = useState({
    pageNo: 0,
    pageSize: 8,
    sortDirection: "",
    sortBy: "",
    searchValue: "",
    categoryId: 1,
  });


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllPageable(page);
        if (response.data.code == 200) {
          setProductLoad([...response.data.result.result]);
          setLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getAllFilter(filter);
        if (response.data.code == 200) {
          setProduct(response.data.result.result);
          setLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleChangeTabBreak = async (id) => {
    setActiveCategory(id);
    filter.categoryId = id;
    try {
      setLoading(true);
      const response = await ProductService.getAllFilter(filter);
      if (response.data.code == 200) {
        setProduct(response.data.result.result);
        setLoading(false);
      }
    } catch (error) {}
  }
  return (
    <section class="pt-[100px]">
      <div class='h-[500px] mb-5'>
        <Slider/>
      </div>
      <div class="grid grid-cols-3 gap-4 mb-5 mx-5">
          <DiscoverItem img={item1}/>
          <DiscoverItem img={item2}/>
          <DiscoverItem img={item3}/>
      </div>
      <ProductArea title="Trending Item">
        <TabArea handleChangeTabBreak={handleChangeTabBreak} activeCategory={activeCategory} />
        <CommonItems title="" className="my-4">
            <div className="grid grid-cols-4 gap-4">
              {!loading && product != null && product?.length > 0 && (
                product.map((item) => (
                  <Item
                  key={item.productId}
                  image={item.pictureDtoList != null && item.pictureDtoList?.length >0 && item.pictureDtoList[0].pictureData != "" ? item.pictureDtoList[0].pictureData : Default}
                  price={item.productPrice}
                  >
                    {item.productTitle}
                  </Item>
                ))
              )}
            </div>
          </CommonItems>
      </ProductArea>
      <div class="page-container grid grid-cols-2 gap-8 pb-5 mx-5">
          <DiscoverItem img={item5}/>
          <DiscoverItem img={item6}/>
      </div>
      {/* Hot item */}
      <ProductArea title="Hot Item">
        <CommonItems title="" className="my-4">
          <div className="grid grid-cols-4 gap-4">
          {!loading && productLoad?.length > 0 && (
              productLoad.map((item, index) => (
                <Item
                key={item.productId + '-' + index}
                image={item.pictureDtoList != null && item.pictureDtoList?.length >0 && item.pictureDtoList[0].pictureData != "" ? item.pictureDtoList[0].pictureData : Default}
                price={item.productPrice}
              >
                {item.productTitle}
              </Item>
              ))
            )}
          </div>
        </CommonItems>
      </ProductArea>

      <section class="shop-home-list section page-container grid gap-10 grid-cols-3">
        <SingleList title="On Sale" />
        <SingleList title="Best Seller" />
        <SingleList title="Top Viewed" />
      </section>

      <ProductArea title="From Our Blog">
        <div class="grid grid-cols-3 gap-8 py-5">
          <ShopBlog img={item4} />
          <ShopBlog img={item5} />
          <ShopBlog img={item6} />
        </div>
      </ProductArea>
      <ShopService />
      <Subscribe />
      
    </section>
  )
}

export default HomeClient;