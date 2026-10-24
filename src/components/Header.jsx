import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
        return <div className="header navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand title" href="#">Supermercado M</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quienes" className="nav-link active" aria-current="page">Quienes somos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link active" aria-current="page">Preguntas frecuentes</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header