import "./Header.css"
import { NavLink } from "react-router-dom"

function Header() {
    return <div className="header navbar navbar-expand-sm navbar-dark fixed-bottom">
        <div className="container-fluid">
            <a className="navbar-brand title" href="#">Supermercado M</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/quienes"
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >Quienes somos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/faq"
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >Preguntas Frecuentes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/agregar"
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >Agregar producto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header