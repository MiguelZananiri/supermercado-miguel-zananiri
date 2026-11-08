import { Link } from "react-router-dom";
import { useState } from "react";
import { useProductos } from "../../context/ProductosContext";
import "./Inicio.css"

function Inicio() {
    const { productos, cargando } = useProductos();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto =>
        producto.tipo === categoriaSeleccionada
    )
    : productos;
        

    return (
        <>
            <h1>INVENTARIO</h1>

            <div className="tw:overflow-hidden tw:rounded-2xl tw:border tw:border-gray-800 tw:bg-gray-900">
                <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4 tw:border-b tw:border-gray-800 tw:p-5">
                    <p className="tw:text-sm tw:text-gray-400">
                        {productosFiltrados.length} productos
                    </p>

                    <div>
                        <label
                            htmlFor="categoria"
                            className="tw:mr-3 tw:text-sm tw:text-gray-300"
                        >
                            Categoría
                        </label>

                        <select
                            id="categoria"
                            value={categoriaSeleccionada}
                            onChange={e =>
                                setCategoriaSeleccionada(e.target.value)
                            }
                            className="tw:rounded-lg tw:border tw:border-gray-700 tw:bg-gray-800 tw:px-4 tw:py-2 tw:text-white tw:focus:ring-2 tw:focus:ring-green-500"
                        >
                            <option value="">Todas</option>

                            {[...new Set(productos.map(p => p.tipo))].map(tipo => (
                                <option key={tipo} value={tipo}>
                                    {tipo}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

            <div>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.map((producto) => (
                            <tr key={producto.id}>
                                <td>
                                    <Link to={`/detalle/${producto.id}`} >{producto.nombre}</Link>
                                    </td>
                                <td>{producto.marca}</td>
                                <td>{producto.tipo}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default Inicio