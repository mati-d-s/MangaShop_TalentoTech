import { Link } from "react-router-dom";
import "../styles/Productos.css";

function Card({ producto }) {
  return (
    <div className="producto-card">
      <h2 className="producto-titulo">{producto.name}</h2>
      <Link to={`/productos/${producto.id}`}>
        <img className="producto-image" src={producto.imagen} alt={producto.name} />
      </Link>
      <p className="producto-precio">{producto.price} $</p>
      <Link to={`/productos/${producto.id}`}>
        <button className="producto-boton">Ver detalles</button>
      </Link>
    </div>
  );
}

export default Card;
