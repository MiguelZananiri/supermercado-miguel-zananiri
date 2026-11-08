import "./Carrito.css"
import { useProductos } from "../../context/ProductosContext"
import { useCarrito } from "../../context/CarritoContext"
import { useState } from "react"

function Carrito() {
    const { carrito, vaciarCarrito } = useCarrito();
    const { productos, setProductos } = useProductos();
    const [cantidad, setCantidad] = useState({});

    const productosCarrito = productos.filter(producto => carrito.includes(producto.id));

    const cambiarCantidad = (id, cambio) => {
        setCantidad(actuales => {
            const cantidadActual = actuales[id] ?? 1;

            return {
                ...actuales,
                [id]: Math.min(100, Math.max(1, cantidadActual + cambio))
            };
        });
    };

    const comprar = () => {
        if (productosCarrito.length === 0) {
            return;
        }

        const sinStock = productosCarrito.find(producto => {
            const unidades = cantidad[producto.id] ?? 1;
            return unidades > producto.stock;
        })

        if (sinStock) {
            alert("No hay stock del producto");
            return;
        }

        setProductos(actuales => actuales.map(producto => {
            if (!carrito.includes(producto.id)) {
                return producto;
            }

            const unidades = cantidad[producto.id] ?? 1;

            return {
                ...producto,
                stock: producto.stock - unidades
            };
        }))

        localStorage.removeItem("carrito");
        vaciarCarrito();
        setCantidad({});
    }

    const total = productosCarrito.reduce((acumulado, producto) => {
        const cantidadProducto = cantidad[producto.id] ?? 1;

        return acumulado + cantidadProducto * producto.precio;
    }, 0);

return (
    <main className="tw:min-h-screen tw:bg-gray-950 tw:px-4 tw:py-10 tw:text-gray-100">
        <h1 className="tw:mb-8 tw:text-center tw:text-3xl tw:font-bold">
            CARRITO
        </h1>

        {productosCarrito.length === 0 ? (
            <p className="tw:mx-auto tw:max-w-2xl tw:rounded-2xl tw:border tw:border-gray-800 tw:bg-gray-900 tw:p-10 tw:text-center tw:text-gray-400">
                No hay productos en el carrito
            </p>
        ) : (
            <div className="tw:mx-auto tw:max-w-2xl tw:overflow-hidden tw:rounded-2xl tw:border tw:border-gray-800 tw:bg-gray-900 tw:shadow-lg">
                <p className="tw:border-b tw:border-gray-800 tw:px-6 tw:py-4 tw:text-lg tw:font-semibold">
                    Tus productos
                </p>

                {productosCarrito.map(producto => {
                    const cantidadProducto = cantidad[producto.id] ?? 1;

                    return (
                        <div
                            key={producto.id}
                            className="tw:flex tw:flex-col tw:gap-4 tw:border-b tw:border-gray-800 tw:p-6 tw:sm:flex-row tw:sm:items-center tw:sm:justify-between"
                        >
                            <p className="tw:text-lg tw:font-semibold">
                                {producto.nombre}
                            </p>

                            <div>
                                <p className="tw:mb-2 tw:text-sm tw:text-gray-400">
                                    Cantidad
                                </p>

                                <div className="tw:inline-flex tw:items-center tw:overflow-hidden tw:rounded-lg tw:border tw:border-gray-700">
                                    <button
                                        onClick={() =>
                                            cambiarCantidad(producto.id, -1)
                                        }
                                        disabled={cantidadProducto === 1}
                                        className="tw:h-10 tw:w-10 tw:cursor-pointer tw:bg-gray-800 tw:text-lg tw:transition tw:hover:bg-gray-700 tw:disabled:cursor-not-allowed tw:disabled:opacity-40"
                                    >
                                        -
                                    </button>

                                    <p className="tw:m-0 tw:w-12 tw:text-center tw:font-semibold">
                                        {cantidadProducto}
                                    </p>

                                    <button
                                        onClick={() =>
                                            cambiarCantidad(producto.id, 1)
                                        }
                                        disabled={cantidadProducto === 100}
                                        className="tw:h-10 tw:w-10 tw:cursor-pointer tw:bg-gray-800 tw:text-lg tw:transition tw:hover:bg-gray-700 tw:disabled:cursor-not-allowed tw:disabled:opacity-40"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="tw:p-6">
                    <div className="tw:mb-6 tw:flex tw:items-center tw:justify-between tw:gap-4">
                        <p className="tw:text-gray-400">
                            Total
                        </p>

                        <p className="tw:text-3xl tw:font-bold tw:text-green-400">
                            ${total}
                        </p>
                    </div>

                    <button
                        onClick={comprar}
                        className="tw:w-full tw:cursor-pointer tw:rounded-lg tw:bg-green-700 tw:px-5 tw:py-3 tw:font-semibold tw:text-white tw:transition tw:hover:bg-green-600"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        )}
    </main>
);
}

export default Carrito