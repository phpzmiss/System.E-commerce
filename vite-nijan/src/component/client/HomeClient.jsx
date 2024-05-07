import React from 'react'
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

function HomeClient() {
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
        <TabArea/>
        <CommonItems title="" className="my-4">
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
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="50.000"
              >
                CloudFee Creamy Caramel
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="50.000"
              >
                CloudFee Creamy Caramel
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="50.000"
              >
                CloudFee Creamy Caramel
              </Item>
              <Item
                image="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                price="50.000"
              >
                CloudFee Creamy Caramel
              </Item>

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

export default HomeClient