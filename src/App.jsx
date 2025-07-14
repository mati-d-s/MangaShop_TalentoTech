import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import Nav from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Contacto from './components/Contacto';
import ProductoDetalle from './components/ProductoDetalle';
import Admin from './components/Admin';
import Login2 from './components/Login2';
import RutaProtegida from './components/RutaProtegida';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/productos" element={<ProductosContainer />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />
      </Routes>
    </>
  );
}

export default App;
