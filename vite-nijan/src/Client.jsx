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

export default class Client extends Component {
  render() {
    return (
      <div class="relative">
        <div class="fixed z-[99] w-full">
          <NavAddress />
          <NavClient /> 
        </div>

        <Routes>
            <Route path="/home" element={<HomeClient></HomeClient>}></Route>
            <Route
                path="/menu"
                element={
                <CardProvider>
                    <ProductClient></ProductClient>
                </CardProvider>
                }
            ></Route>
            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>

        <FooterClient />
      </div>
    )
  }
}
