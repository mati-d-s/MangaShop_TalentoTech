import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { crearUsuario, loginEmailPass, logearG } from "../auth/firebase";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, user } = useAuthContext();
  const navigate = useNavigate();

  // Credenciales hardcodeadas del admin
  const ADMIN_EMAIL = "admin@admin.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = async (e) => {
    e.preventDefault();

    // Login admin local
    if (usuario === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      login("admin");
      navigate("/admin");
      return;
    }

    // Login con Firebase para otros usuarios
    try {
      const credenciales = await loginEmailPass(usuario, password);
      login(credenciales.user.email);
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales incorrectas");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();

    if (usuario === ADMIN_EMAIL) {
      alert("No se puede registrar con este email.");
      return;
    }

    try {
      const credenciales = await crearUsuario(usuario, password);
      login(credenciales.user.email);
      navigate("/");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar usuario");
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const resultado = await logearG();
      login(resultado.user.email);
      navigate("/");
    } catch (error) {
      console.error("Error con Google:", error);
      alert("Error al iniciar sesión con Google");
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (user) {
    return (
      <div>
        <h2>¡Hola {user}!</h2>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <form onSubmit={handleRegistro}>
        <h2>Registrarse</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>

      <hr />
      <button onClick={handleLoginGoogle}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
