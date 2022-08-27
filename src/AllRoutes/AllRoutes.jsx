import React from 'react'
import {Routes,Route} from "react-router-dom"
import ProductList from '../components/ProductList'

export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path='/' element={<ProductList/>}/>
    </Routes>
    </>
  )
}
