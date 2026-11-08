import "./DetalleProducto.css"
import { useProductos } from "../../context/ProductosContext"
import { useCarrito } from "../../context/CarritoContext"
import { useParams } from "react-router-dom"

function DetalleProducto() {
    const { agregarCarrito, productoEnCarrito } = useCarrito();
    const { productos, cargando } = useProductos();
    const { id } = useParams();
    const producto = productos.find(producto => String(producto.id) === id);

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

return (
    <main className="tw:min-h-screen tw:bg-gray-950 tw:px-4 tw:py-10 tw:text-gray-100">
        <h1 className="tw:mb-8 tw:text-center tw:text-3xl tw:font-bold">
            DETALLE DEL PRODUCTO
        </h1>

        <div className="tw:mx-auto tw:max-w-lg tw:rounded-2xl tw:border tw:border-gray-800 tw:bg-gray-900 tw:p-6 tw:shadow-lg tw:sm:p-8">
            <p className="tw:py-4 tw:text-xl tw:font-semibold">
                Nombre: {producto.nombre}
            </p>

            <hr className="tw:border-gray-800" />

            <p className="tw:py-4 tw:text-gray-300">
                Marca: {producto.marca}
            </p>

            <hr className="tw:border-gray-800" />

            <p className="tw:py-4 tw:text-gray-300">
                Tipo: {producto.tipo}
            </p>

            <hr className="tw:border-gray-800" />

            <p className="tw:py-5 tw:text-2xl tw:font-bold tw:text-green-400">
                Precio: ${producto.precio}
            </p>

            <button
                id="agregar-carrito"
                onClick={() => agregarCarrito(producto)}
                disabled={productoEnCarrito(producto)}
                className="tw:mt-4 tw:w-full tw:cursor-pointer tw:rounded-lg tw:bg-green-700 tw:px-5 tw:py-3 tw:font-semibold tw:text-white tw:transition tw:hover:bg-green-600 tw:disabled:cursor-not-allowed tw:disabled:bg-gray-800 tw:disabled:text-gray-400"
            >
                {productoEnCarrito(producto)
                    ? "En el carrito"
                    : "Agregar al carrito"}
            </button>
        </div>
    </main>
);
}

export default DetalleProducto