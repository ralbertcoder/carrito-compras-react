import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>,
  </BrowserRouter>
)
