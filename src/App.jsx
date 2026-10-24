import { useState } from 'react'
import Header from './components/Header'
import Inicio from './components/pages/Inicio'
import Quienes from './components/pages/Quienes'
import FAQ from './components/pages/FAQ'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>

  )
}

export default App
