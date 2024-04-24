import { useState } from 'react'
import './App.css'
import Header from './component/admin/Header'
import Sidebar from './component/admin/Sidebar'
import Home from './component/admin/Home'
import Category from './component/admin/views/Category'
import AddCategory from './component/admin/adds/AddCategory'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './component/admin/adds/AddProduct'
import Product from './component/admin/views/Product'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <div className='relative h-full'>
      <Header OpenSidebar={OpenSidebar}/>
      <div className="flex shadow-2xl">
        <div className='h-screen'>
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        </div>
        <div className="mt-[54px] flex flex-col items-center w-full p-3 m-3 bg-white rounded-md shadow-2xl">
          <Routes>
              <Route
                exact
                path="/dashboard"
                element={<Home></Home>}
              ></Route>
              <Route
                exact
                path="/category"
                element={<Category></Category>}
              ></Route>
              <Route
                exact
                path="/add-category"
                element={<AddCategory></AddCategory>}
              ></Route>
              <Route
                exact
                path="/edit-category/:id"
                element={<AddCategory></AddCategory>}
              ></Route>
              <Route
                exact
                path="/product"
                element={<Product></Product>}
              ></Route>
              <Route
                exact
                path="/add-product"
                element={<AddProduct></AddProduct>}
              ></Route>
          </Routes>
        </div>
      </div>
    </div>
  </>
  )

}

export default Admin
