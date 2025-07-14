import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledMain = styled.main`
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 30px auto;
  font-family: "Segoe UI", sans-serif;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .info {
    padding: 15px;

    h3 {
      margin: 0 0 10px;
      font-size: 1.2rem;
      color: #222;
    }

    p {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 10px;
    }

    span {
      font-weight: bold;
      color: #007bff;
    }
  }
`;

function Main() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        setError("Error al cargar los productos.");
        setCargando(false);
      });
  }, []);

  return (
    <StyledMain>
      <h2>Contenido Principal</h2>
      {cargando && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}
      {!cargando && !error && (
        <div className="grid">
          {productos.map((producto) => (
            <Card key={producto.id}>
              <img src={producto.imagen} alt={producto.name} />
              <div className="info">
                <h3>{producto.name}</h3>
                <p>{producto.description}</p>
                <span>${producto.price}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </StyledMain>
  );
}

export default Main;
