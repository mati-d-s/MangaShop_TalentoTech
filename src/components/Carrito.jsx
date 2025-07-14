import "../styles/Carrito.css";
import { useContext } from "react";
import CarritoCard from "./CarritoCard.jsx";
import { Navigate } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext.jsx";
import { useAuthContext } from "../contexts/AuthContext.jsx";

export default function Carrito() {
  const { user } = useAuthContext();
  const { productosCarrito, vaciarCarrito, borrarProductoCarrito } =
    useContext(CarritoContext);

  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.price * producto.cantidad,
    0
  );

  function funcionDisparadora(id) {
    borrarProductoCarrito(id);
  }

  function funcionDisparadora2() {
    vaciarCarrito();
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fff8e1",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontWeight: "700",
            fontSize: "1.8rem",
            color: "#7f5af0",
          }}
        >
          Carrito de Compras
        </h1>
        <button
          onClick={funcionDisparadora2}
          style={{
            backgroundColor: "#f9a825",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 16px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 4px 8px rgba(249, 168, 37, 0.3)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f57f17")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f9a825")
          }
        >
          Vaciar carrito
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr 1fr 1fr 1fr 1fr 0.5fr",
          gap: "12px",
          fontWeight: "600",
          borderBottom: "2px solid #ddd",
          paddingBottom: "12px",
          marginBottom: "16px",
          color: "#7f5af0",
          fontSize: "0.95rem",
        }}
      >
        <div>Producto</div>
        <div>Descripción</div>
        <div></div>
        <div>Cantidad</div>
        <div>Precio unitario</div>
        <div>Sub total</div>
        <div></div>
      </div>

      {productosCarrito.length > 0 ? (
        productosCarrito.map((producto) => (
          <CarritoCard
            key={producto.id}
            producto={producto}
            funcionDisparadora={funcionDisparadora}
          />
        ))
      ) : (
        <p
          style={{ textAlign: "center", fontSize: "1.1rem", marginTop: "40px" }}
        >
          Tu carrito está vacío 😢
        </p>
      )}

      {total > 0 && (
        <div
          style={{
            marginTop: "30px",
            textAlign: "right",
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#7f5af0",
          }}
        >
          Total a pagar: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
}
