import React, { Component } from 'react'
import NavAddress from './component/client/NavAddress'
import NavClient from './component/client/NavClient'
import { Route, Routes } from 'react-router-dom'
import { CardProvider } from './component/modules/cart-context'
import ProductClient from './component/client/ProductClient'
import FooterClient from './component/client/FooterClient'
import HomeClient from './component/client/HomeClient'
import ContactUs from './component/client/ContactUs'
import Checkout from './component/client/Checkout'
import SignUp from './component/secure/SignUp'
import SignIn from './component/secure/SignIn'
import CartClient from './component/client/CartClient'
import DetailProduct from './component/admin/views/DetailProduct'

export default class Client extends Component {
  render() {
    return (
      <div class="relative">
        <div class="fixed z-[99] w-full">
          <NavAddress />
          <NavClient /> 
        </div>

        <Routes>
            <Route exact path="/" element={<HomeClient></HomeClient>}></Route>
            <Route exact
                path="/product"
                element={
                <CardProvider>
                    <ProductClient></ProductClient>
                </CardProvider>
                }
            ></Route>
            <Route exact path="/contact" element={<ContactUs></ContactUs>}></Route>
            <Route exact path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route exact path="/cart" element={<CartClient></CartClient>}></Route>
            <Route exact path="/detail/:param1/:param2" element={<DetailProduct></DetailProduct>}></Route>
            <Route exact path="/sign-in" element={<SignIn></SignIn>}></Route>
            <Route exact path="/sign-up" element={<SignUp></SignUp>}></Route>
        </Routes>

        <FooterClient />
      </div>
    )
  }
}
