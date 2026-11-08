import { useState } from "react";
import { useProductos } from "../../context/ProductosContext"

function AgregarProducto() {
    const { productos, setProductos } = useProductos();

    const [formulario, setFormulario] = useState({
        nombre: "",
        marca: "",
        tipo: "",
        precio: "",
        stock: ""
    });
    const [enviado, setEnviado] = useState(false);

    const cambiarCampo = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    // agregar juego a la memoria
    const agregar = (e) => {
        e.preventDefault();

        const producto = {
            id: Math.max(0, ...productos.map(p => Number(p.id))) + 1,
            nombre: formulario.nombre.trim(),
            marca: formulario.marca.trim(),
            tipo: formulario.tipo.trim(),
            precio: Number(formulario.precio),
            stock: Number(formulario.stock)
        };

        setProductos(actuales => [...actuales, producto]);

        setFormulario({
            nombre: "",
            marca: "",
            tipo: "",
            precio: "",
            stock: ""
        });

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
                                value={formulario.nombre}
                                onChange={cambiarCampo}
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
                                value={formulario.marca}
                                onChange={cambiarCampo}
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
                                value={formulario.tipo}
                                onChange={cambiarCampo}
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
                                value={formulario.precio}
                                onChange={cambiarCampo}
                                className="tw:bg-gray-800 tw:text-white tw:placeholder-white-800 tw:w-full tw:border tw:border-gray-300 tw:rounded-md tw:p-3"
                                autoComplete="off" />
                        </div>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <input
                                id="stock"
                                type="number"
                                name="stock"
                                required
                                value={formulario.stock}
                                onChange={cambiarCampo}
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