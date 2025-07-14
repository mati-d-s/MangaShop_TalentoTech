import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { crearUsuario, loginEmailPass, logearG } from "../auth/firebase";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ Login local
    if (usuario === "admin@admin.com" && password === "admin123") {
      login("admin");
      navigate("/admin");
      return;
    }

    try {
      const credenciales = await loginEmailPass(usuario, password);
      login(credenciales.user.email);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Usuario no registrado");
      } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      } else if (error.code === "auth/invalid-email") {
        alert("Email inválido");
      } else {
        alert("Error al iniciar sesión");
      }
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const credenciales = await crearUsuario(usuario, password);
      login(credenciales.user.email);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Este correo ya está registrado");
      } else if (error.code === "auth/invalid-email") {
        alert("Email inválido");
      } else if (error.code === "auth/weak-password") {
        alert("La contraseña debe tener al menos 6 caracteres");
      } else {
        alert("Error al registrar");
      }
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const resultado = await logearG();
      login(resultado.user.email);
      navigate("/");
    } catch {
      alert("Error al iniciar sesión con Google");
    }
  };

  const handleLogout = () => logout();

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      {user ? (
        <>
          <h2>¡Hola {user}!</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <form onSubmit={handleLogin}>
            <h2>Iniciar sesión</h2>
            <input
              type="email"
              placeholder="Correo"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar sesión</button>
          </form>

          <form onSubmit={handleRegistro}>
            <h2>Registrarse</h2>
            <input
              type="email"
              placeholder="Correo"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Registrarse</button>
          </form>

          <hr />
          <button onClick={handleLoginGoogle}>Iniciar sesión con Google</button>
        </>
      )}
    </div>
  );
}

export default Login;
