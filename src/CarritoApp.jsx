import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './componentes/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { Navigate } from 'react-router-dom'
import { ProductosProvider } from './context/ProductosProvider'


export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <NavBar></NavBar>
      <div className='container'>
      <Routes>
        
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
          <Route path="/compras" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
       
      </Routes>
      </div>
      </ProductosProvider>
  )
}
