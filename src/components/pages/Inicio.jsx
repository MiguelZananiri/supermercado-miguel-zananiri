import React from 'react'
import "./Inicio.css"

function Inicio() {
    return (
        <>
            <h1>INICIO</h1>
            <div className="cards">
                <div className="producto-card">
                    <p>Pan marraqueta</p>
                    <p>1.100 CLP</p>
                </div>
                
                <div className="producto-card">
                    <p>Cafe</p>
                    <p>5.900 CLP</p>
                </div>
            </div>
        </>
    )
}

export default Inicio