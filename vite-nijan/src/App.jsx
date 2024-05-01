import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './component/secure/SignIn'
import Client from './Client'
import Admin from './Admin'
import Category from './component/admin/views/Category'
import SignUp from './component/secure/SignUp'

export default function () {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Client/>} />
                <Route path='/admin/*' element={<Admin/>} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/sign-up" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
