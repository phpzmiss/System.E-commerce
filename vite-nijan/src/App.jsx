import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
                {/* {isAdmin ? <Route path='/admin/*' element={<Admin/>} /> : (<Navigate to="/sign-in" />)} */}
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/sign-up" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
