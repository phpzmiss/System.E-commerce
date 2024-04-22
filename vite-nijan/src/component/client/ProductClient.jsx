import React, { useEffect, useState } from "react";
import Taskbar from "../fragment/Taskbar";
import Item from "../fragment/Item";
import ItemNews from "../fragment/ItemNews";
import CommonItems from "../fragment/CommonItems";
import { useCard } from "../modules/cart-context";
import Breadcrumbs from "../admin/fragments/Breadcrumbs";

const ProductClient = () => {
  const { coffee, setCoffee } = useCard();
  // const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await ProductAPI.getAllProduct();
  //       console.log(response.data);
  //       setCoffee(response.data);
  //     } catch (error) {}
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section class='pt-[100px]'>
      <Breadcrumbs redirect="Product" />
      <div className="grid grid-cols-4 gap-4 page-container">
        <Taskbar></Taskbar>
        <div className="col-span-3 my-3">
          <div className="my-3 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1658528802649-2d49e3e9238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <CommonItems title="Coffee" className="my-4">
            <div className="grid grid-cols-4 gap-4">
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="30.000"
              >
                Americano
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="35.000"
              >
                Cold Brew Sữa Tươi
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="40.000"
              >
                Cold Brew Truyền Thống
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="50.000"
              >
                CloudFee Creamy Caramel
              </Item>
            </div>
          </CommonItems>
          <CommonItems title="Tin tức" className="my-3">
            <div className="grid grid-cols-3 my-3 gap-x-3">
              <ItemNews
                button="Đọc tiếp"
                image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              >
                This is a new space.
              </ItemNews>
              <ItemNews
                button="Đọc tiếp"
                image="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              >
                This is a new space.
              </ItemNews>
              <ItemNews
                button="Đọc tiếp"
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
