import { createContext, useContext, useEffect, useState } from "react";
import { leerStorage, guardarStorage } from "../utils/storage";

const ProductosContext = createContext(null);

export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [inicializado, setInicializado] = useState(false);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const guardado = leerStorage("inventario", null);

                if (Array.isArray(guardado) && guardado.length > 0) {
                    setProductos(guardado);
                    setInicializado(true);
                    return;
                }

                const response = await fetch(
                    `${import.meta.env.BASE_URL}productos.json`
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar los productos");
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("El inventario debe ser una lista");
                }

                // Recuperar productos agregados con la versión anterior.
                const contenido = leerStorage("nuevoProducto", []);

                const guardados = Array.isArray(contenido)
                    ? contenido
                    : contenido ? [contenido] : [];

                setProductos([...data, ...guardados]);
                setInicializado(true);
            } catch (error) {
                console.error(error);
            } finally {
                setCargando(false);
            }
        };

        obtenerProductos();
    }, []);

    useEffect(() => {
        if (inicializado) {
            guardarStorage("inventario", productos);
        }
    }, [productos, inicializado]);

    return (
        <ProductosContext.Provider
            value={{ productos, setProductos, cargando }}
        >
            {children}
        </ProductosContext.Provider>
    );
}

export function useProductos() {
    const context = useContext(ProductosContext);

    if (context === null) {
        throw new Error(
            "useProductos debe ser usado dentro de un ProductosProvider"
        );
    }

    return context;
}