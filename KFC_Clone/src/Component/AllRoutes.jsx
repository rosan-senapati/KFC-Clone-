import React, { useEffect } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import MenuPage from '../Pages/MenuPage'
import DealsPage from '../Pages/DealsPage'
import LoginPage from '../Pages/LoginPage'
import SigninPage from '../Pages/SigninPage'
import CartPage from '../Pages/CartPage'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  const { pathname } = useLocation();

  useEffect(()=>{
       window.scrollTo(0,0);
  },[pathname])
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/menu' element={<MenuPage/>}></Route>
    <Route path='/deals'n element={<DealsPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/signin' element={<SigninPage/>}></Route>
    <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>}></Route> 
    </Routes>
  )
}

export default AllRoutes