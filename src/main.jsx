import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </ProductosProvider>
  </StrictMode>,
)
