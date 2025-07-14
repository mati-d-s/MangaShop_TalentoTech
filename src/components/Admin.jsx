import { useAuthContext } from "../contexts/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Admin.css";

export default function Admin() {
  const { user } = useAuthContext();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
        setCargando(false);
      });
  }, []);

  const eliminarProducto = (id) => {
    const confirmacion = confirm("¿Estás seguro de eliminar este producto?");
    if (confirmacion) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  // Sólo puede acceder admin
  if (user !== "admin") {
    return <Navigate to="/login" replace />;
  }

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Panel de Administración</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagen} alt={producto.name} style={{ width: 80 }} />
              </td>
              <td>{producto.name}</td>
              <td>${producto.price}</td>
              <td>{producto.description.slice(0, 50)}...</td>
              <td>
                <button onClick={() => eliminarProducto(producto.id)}>🗑 Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
