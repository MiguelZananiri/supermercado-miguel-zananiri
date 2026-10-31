import { useState } from "react";

function AgregarProducto({ productos, setProductos }) {
    const [enviado, setEnviado] = useState(false);

    // agregar juego a la memoria
    const agregar = (e) => {
        e.preventDefault();
        const storage = JSON.parse(localStorage.getItem("nuevoProducto")) || [];

        const id = Math.max(0, ...productos.map((producto) => Number(producto.id)), ...storage.map((producto) => Number(producto.id))) + 1;

        const nombre = document.getElementById("nombre").value;
        const marca = document.getElementById("marca").value;
        const tipo = document.getElementById("tipo").value;
        const precio = document.getElementById("precio").value;
        const producto = { id, nombre, marca, tipo, precio };

        storage.push(producto);
        localStorage.setItem("nuevoProducto", JSON.stringify(storage));

        setProductos((anteriores) => [...anteriores, producto]);

        mensajeEnvio(e);
    }

    function mensajeEnvio(e) {
        e.preventDefault();
        setEnviado(true);
    }

    return (
        <div>
            <h1>AGREGAR PRODUCTO</h1>
            {enviado ? (
                <div role="status"
                    className="tw:bg-green-100 tw:text-green-800 tw:p-5 tw:rounded-lg tw:text-center">
                    <div>
                        <h2>PRODUCTO AGREGADO</h2>
                        <button 
                        onClick={() => setEnviado(false)}
                        className="tw:mt-4 tw:bg-green-800 tw:text-white tw:px-5 tw:py-2 tw:cursor-pointer">Aceptar</button>
                    </div>
                </div>
            ) : (
                <div className="tw:grid tw:gap-2 tw:mb-4 tw:text-center tw:w-full tw:max-w-lg tw:mx-auto">
                    <form onSubmit={agregar}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                required
                                className="tw:bg-gray-800 tw:text-white tw:placeholder-white-800 tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:p-3"
                                autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="marca">Marca del producto</label>
                            <input
                                id="marca"
                                type="text"
                                name="marca"
                                required
                                className="tw:bg-gray-800 tw:text-white tw:placeholder-white-800 tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:p-3"
                                autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="tipo">Tipo del producto</label>
                            <input
                                id="tipo"
                                type="text"
                                name="tipo"
                                required
                                className="tw:bg-gray-800 tw:text-white tw:placeholder-white-800 tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:p-3"
                                autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="precio">Precio</label>
                            <input
                                id="precio"
                                type="number"
                                name="precio"
                                required
                                className="tw:bg-gray-800 tw:text-white tw:placeholder-white-800 tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:p-3"
                                autoComplete="off" />
                        </div>
                        <div className="tw:flex tw:justify-center">
                            <button
                                type="submit"
                                className="tw:bg-green-800 tw:text-white tw:px-4 tw:py-2"
                            >
                                Agregar producto
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AgregarProducto