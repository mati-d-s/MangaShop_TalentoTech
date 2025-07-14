import React, { createContext, useState, useEffect } from 'react';

// 1. Crear el contexto del carrito
export const CarritoContext = createContext();

// 2. Crear el proveedor del contexto del carrito
export function CarritoProvider({ children }) {
    // Cargar el carrito de localStorage al iniciar (o vacío si no hay nada)
    const [productosCarrito, setProductosCarrito] = useState(() => {
        try {
            const carritoGuardado = localStorage.getItem('carrito');
            return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        } catch (error) {
            console.error("Error al cargar el carrito de localStorage:", error);
            return []; // Retorna un array vacío si hay un error
        }
    });

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        try {
            localStorage.setItem('carrito', JSON.stringify(productosCarrito));
        } catch (error) {
            console.error("Error al guardar el carrito en localStorage:", error);
        }
    }, [productosCarrito]);

    // Función para agregar o actualizar un producto en el carrito
    const agregarAlCarrito = (productoAAgregar) => {
        // Asegúrate de que el producto que llega tenga una propiedad 'cantidad'
        // Si no la tiene, asumimos cantidad 1 por defecto (o la que se espere del componente)
        const productoConCantidad = { ...productoAAgregar, cantidad: productoAAgregar.cantidad || 1 };

        const existe = productosCarrito.find(p => p.id === productoConCantidad.id);

        if (existe) {
            // Si el producto ya está en el carrito, actualiza su cantidad
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === productoConCantidad.id){
                    // Sumamos la cantidad que ya tenía con la nueva cantidad que se está agregando
                    return { ...p, cantidad: p.cantidad + productoConCantidad.cantidad };
                } else {
                    return p;
                }
            });
            setProductosCarrito(carritoActualizado);
        } else {
            // Si el producto no existe, lo agrega al carrito
            setProductosCarrito([...productosCarrito, productoConCantidad]);
        }
    };

    // Función para vaciar completamente el carrito
    const vaciarCarrito = () => {
        setProductosCarrito([]);
    };

    // Función para borrar un producto específico del carrito por su ID
    const borrarProductoCarrito = (idProductoABorrar) => {
        const nuevoCarrito = productosCarrito.filter((p) => p.id !== idProductoABorrar);
        setProductosCarrito(nuevoCarrito);
    };

    // Función para modificar la cantidad de un producto específico en el carrito (ej. desde un input)
    const actualizarCantidadProducto = (id, nuevaCantidad) => {
        setProductosCarrito(prevCarrito =>
            prevCarrito.map(p =>
                p.id === id ? { ...p, cantidad: nuevaCantidad } : p
            ).filter(p => p.cantidad > 0) // Si la cantidad llega a 0, lo elimina
        );
    };

    return (
        <CarritoContext.Provider value={{
            productosCarrito,
            agregarAlCarrito,
            vaciarCarrito,
            borrarProductoCarrito,
            actualizarCantidadProducto
        }}>
            {children}
        </CarritoContext.Provider>
    );
}