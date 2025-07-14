import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext";

function Nav() {
  const { productosCarrito } = useContext(CarritoContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.85)",
        borderBottom: "1px solid rgba(200, 200, 200, 0.4)",
        padding: "1rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={navContainer}>
        <h1 style={logoStyle}>✨ MangaShop</h1>

        <button
          onClick={toggleMenu}
          className="menu-toggle"
          style={menuToggleStyle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <ul
          className={`nav-links ${isOpen ? "open" : ""}`}
          style={navListStyle(isOpen)}
        >
          <li>
            <Link to="/" style={linkStyle}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" style={linkStyle}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/nosotros" style={linkStyle}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" style={linkStyle}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/carrito" style={linkStyle}>
              🛒 Carrito
              <span style={badgeStyle}>
                {productosCarrito.length > 0 ? productosCarrito.length : ""}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/admin" style={linkStyle}>
              Admin
            </Link>
          </li>
          <li>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        /* Responsive menu toggle */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          .nav-links {
            flex-direction: column;
            align-items: flex-start;
            display: none;
            background: rgba(255, 255, 255, 0.95);
            width: 100%;
            border-radius: 12px;
            padding: 1rem;
            margin-top: 1rem;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
          }
          .nav-links.open {
            display: flex;
          }
          .nav-links li {
            width: 100%;
            margin-bottom: 0.6rem;
          }
          .nav-links li:last-child {
            margin-bottom: 0;
          }
        }
        /* Hover color to match producto-boton */
        ul.nav-links li a:hover {
          background-color: #f9a825;
          color: #fff;
        }
      `}</style>
    </nav>
  );
}

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

const logoStyle = {
  margin: 0,
  fontSize: "1.8rem",
  color: "#f9a825", // Amarillo vibrante para destacar el logo
  fontWeight: "700",
  letterSpacing: "0.06em",
  userSelect: "none",
};

const menuToggleStyle = {
  background: "transparent",
  border: "none",
  fontSize: "1.8rem",
  cursor: "pointer",
  color: "#333",
  display: "none", // Visible solo en mobile con media query
};

const navListStyle = (isOpen) => ({
  listStyle: "none",
  display: "flex",
  gap: "1.2rem",
  margin: 0,
  padding: 0,
  alignItems: "center",
  transition: "all 0.3s ease-in-out",
  flexWrap: "wrap",
  ...(isOpen ? { display: "flex" } : {}),
});

const linkStyle = {
  color: "#1e293b",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "600",
  padding: "0.6rem 1rem",
  borderRadius: "12px",
  transition: "all 0.25s ease",
  backgroundColor: "transparent",
  position: "relative",
  userSelect: "none",
  letterSpacing: "0.02em",
};

const badgeStyle = {
  background: "#ff6b81",
  color: "#fff",
  padding: "3px 9px",
  borderRadius: "12px",
  fontSize: "0.8rem",
  marginLeft: "6px",
  fontWeight: "700",
  userSelect: "none",
};

export default Nav;
