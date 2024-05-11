import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/admin/Header'
import Sidebar from './component/admin/Sidebar'
import Category from './component/admin/views/Category'
import AddCategory from './component/admin/adds/AddCategory'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AddProduct from './component/admin/adds/AddProduct'
import Product from './component/admin/views/Product'
import Contact from './component/admin/views/Contact'
import Order from './component/admin/views/Order'
import Home from './component/admin/Home'

function Admin() {
  const [items, setItems] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const storedName = JSON.parse(localStorage.getItem('user'));
      setItems(storedName);
      setIsAdmin(storedName.roles.includes('ADMIN'));
    } else {
      navigate("/sign-in");
    }
  }, [isAdmin]);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  if (items && !items.roles.includes('ADMIN')) {
    navigate("/sign-in");
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
                path="/"
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
              <Route
                exact
                path="/edit-product/:id"
                element={<AddProduct></AddProduct>}
              ></Route>
              <Route
                exact
                path="/contact"
                element={<Contact></Contact>}
              ></Route>
              <Route
                exact
                path="/order"
                element={<Order></Order>}
              ></Route>
          </Routes>
        </div>
      </div>
    </div>
  </>
  )

}

export default Admin
