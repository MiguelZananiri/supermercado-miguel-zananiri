import { createContext, useContext, useEffect, useState } from "react";
import { leerStorage, guardarStorage } from "../utils/storage";

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        const guardado = leerStorage("carrito", []);
        return Array.isArray(guardado) ? guardado : [];
    });

    useEffect(() => {
        guardarStorage("carrito", carrito);
    }, [carrito]);

    const agregarCarrito = (producto) => {
        setCarrito(actual => 
            actual.includes(producto.id)
            ? actual
            : [...actual, producto.id]
        );
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const productoEnCarrito = (producto) => {
        return carrito.includes(producto.id);
    };
    
    return (
        <CarritoContext.Provider value={{ carrito, agregarCarrito, productoEnCarrito, vaciarCarrito }} >
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    const context = useContext(CarritoContext);

    if (!context) {
        throw new Error("useCarrito debe ser usado dentro de un CarritoProvider");
    }

    return context;
}