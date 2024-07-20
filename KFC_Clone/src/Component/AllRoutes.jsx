import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import MenuPage from '../Pages/MenuPage'
import DealsPage from '../Pages/DealsPage'
import LoginPage from '../Pages/LoginPage'
import SigninPage from '../Pages/SigninPage'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/menu' element={<MenuPage/>}></Route>
    <Route path='/deals'n element={<DealsPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/signin' element={<SigninPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes