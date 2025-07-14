import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";

function ProductoDetalle() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === id);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico(
      "Producto Agregado",
      "El producto fue agregado al carrito con éxito",
      "success",
      "Cerrar"
    );
    agregarAlCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        Cargando producto...
      </p>
    );

  if (error)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "1.2rem",
          color: "#d32f2f",
          fontWeight: "600",
        }}
      >
        {error}
      </p>
    );

  if (!producto) return null;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        display: "flex",
        gap: "40px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.name}
        style={{
          width: "350px",
          borderRadius: "12px",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "2rem",
            color: "#7f5af0",
            fontWeight: "700",
          }}
        >
          {producto.name}
        </h2>
        <p
          style={{
            flexGrow: 1,
            fontSize: "1.1rem",
            lineHeight: "1.5",
            marginBottom: "24px",
            textAlign: "justify",
          }}
        >
          {producto.description}
        </p>
        <p
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
            color: "#f9a825",
            marginBottom: "24px",
          }}
        >
          {producto.price} $
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <button
            onClick={restarContador}
            style={{
              backgroundColor: "#7f5af0",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "700",
              userSelect: "none",
              boxShadow: "0 4px 8px rgba(127, 90, 240, 0.3)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6246ea")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#7f5af0")
            }
            aria-label="Disminuir cantidad"
          >
            −
          </button>
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              width: "40px",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            {cantidad}
          </span>
          <button
            onClick={sumarContador}
            style={{
              backgroundColor: "#7f5af0",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "700",
              userSelect: "none",
              boxShadow: "0 4px 8px rgba(127, 90, 240, 0.3)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6246ea")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#7f5af0")
            }
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <button
          onClick={funcionCarrito}
          style={{
            backgroundColor: "#f9a825",
            border: "none",
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.2rem",
            padding: "14px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 6px 12px rgba(249, 168, 37, 0.4)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f57f17")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f9a825")
          }
          aria-label="Agregar producto al carrito"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductoDetalle;
