import { useState } from 'react'
import Header from './components/Header'
import Inicio from './components/pages/Inicio'
import Quienes from './components/pages/Quienes'
import FAQ from './components/pages/FAQ'
import AgregarProducto from './components/pages/AgregarProducto'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  const [productos, setProductos] = useState([])

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio productos={productos} setProductos={setProductos} />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/agregar" element={<AgregarProducto productos={productos} setProductos={setProductos}/>} />
      </Routes>
    </Router>

  )
}

export default App
