import { useState, useEffect  } from 'react'
import Header from './components/Header'
import Inicio from './components/pages/Inicio'
import Quienes from './components/pages/Quienes'
import FAQ from './components/pages/FAQ'
import AgregarProducto from './components/pages/AgregarProducto'
import DetalleProducto from './components/pages/DetalleProducto'
import Carrito from './components/pages/Carrito'
import './App.css'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/agregar" element={<AgregarProducto />} />
        <Route path="/detalle/:id" element={<DetalleProducto  />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>

  )
}

export default App
