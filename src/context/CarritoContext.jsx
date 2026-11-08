import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { leerStorage, guardarStorage } from "../utils/storage";

const CarritoContext = createContext(null);

function carritoReducer(estado, accion) {
    switch (accion.type) {
        case "AGREGAR":
            if (estado.some(item => item.id === accion.id)) {
                return estado;
            }

            return [...estado, { id: accion.id, cantidad: 1 }];

        case "CAMBIAR_CANTIDAD":
            return estado.map(item => {
                item.id === accion.id ? {
                    ...item,
                    cantidad: Math.min(
                        100, Math.max(1, item.cantidad + accion.cambio)
                    )
                }
                :item
            })

        case "VACIAR":
            return [];

        default:
            return estado;
    }
}

function cargarCarrito() {
    const guardado = leerStorage("carrito", []);

    if (!Array.isArray(guardado)) {
        return guardado.map(item => 
            typeof item === "object" && item !== null ? item : { id: item, cantidad: 1 }
        )
    }
}

export function CarritoProvider({ children }) {
    const [carrito, dispatch] = useReducer(
        carritoReducer,
        undefined,
        cargarCarrito
    )

    useEffect(() => {
        guardarStorage("carrito", carrito);
    }, [carrito]);

    const agregarCarrito = (producto) => {
        dispatch({
            type: "AGREGAR",
            id: producto.id,
        });
    };

    const cambiarCantidad = (id, cambio) => {
        dispatch({
            type: "CAMBIAR_CANTIDAD",
            id,
            cambio,
        });
    };

    const vaciarCarrito = () => {
        dispatch({
            type: "VACIAR",
        });
    };

    const productoEnCarrito = (producto) => {
        return carrito.includes(producto.id);
    };
    
    return (
        <CarritoContext.Provider value={{ carrito, agregarCarrito, cambiarCantidad, productoEnCarrito, vaciarCarrito }} >
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