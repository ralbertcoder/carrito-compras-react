import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './componentes/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { Navigate } from 'react-router-dom'

export const CarritoApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='container'>
      <Routes>
        
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
          <Route path="/compras" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
       
      </Routes>
      </div>
    </>
  )
}
