import { useEffect } from "react";
import "./Inicio.css"

function Inicio({ productos, setProductos }) {
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await fetch(
                    `productos.json`
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar los productos");
                }

                const data = await response.json();

                const guardados = JSON.parse(localStorage.getItem("nuevoProducto")) || [];

                setProductos([...data, ...guardados]);
            } catch (error) {
                console.error(error);
            }
        };

        obtenerProductos();
    }, [setProductos]);

    return (
        <>
            <h1>INVENTARIO</h1>

            <div>
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Tipo</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.tipo}</td>
                                <td>${producto.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Inicio