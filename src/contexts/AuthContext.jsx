import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el contexto de autenticación
const AuthContext = createContext(null);

// 2. Crear el proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Almacena el nombre de usuario si está logueado
  const [isLoadingAuth, setIsLoadingAuth] = useState(true); // Para saber si estamos comprobando la autenticación

  // Cargar el estado de autenticación desde localStorage al iniciar la aplicación
  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        // Asumimos que el token contiene el nombre de usuario (ej: 'fake-token-admin')
        const username = token.split('fake-token-')[1];
        setUser(username);
      }
    } catch (error) {
      console.error("Error al cargar el token de autenticación de localStorage:", error);
    } finally {
      setIsLoadingAuth(false); // La comprobación inicial ha terminado
    }
  }, []);

  // Función para iniciar sesión
  const login = (username) => {
    const token = `fake-token-${username}`; // Token de ejemplo
    localStorage.setItem('authToken', token);
    setUser(username);
    // Aquí puedes añadir un toast de éxito si ya tienes React Toastify configurado
    // toast.success(`¡Bienvenido, ${username}!`);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    // Aquí puedes añadir un toast de éxito
    // toast.info("Sesión cerrada.");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para un uso más fácil del contexto de autenticación
export const useAuthContext = () => useContext(AuthContext);

// Exportar AuthContext para usarlo en RutaProtegida
export { AuthContext };