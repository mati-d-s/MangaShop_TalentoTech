import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext(null);

// Proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const username = token.split('fake-token-')[1];
        setUser(username);
      }
    } catch (error) {
      console.error("Error al cargar el token de autenticación de localStorage:", error);
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  const login = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken', token);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto fácilmente
export const useAuthContext = () => useContext(AuthContext);
export { AuthContext };
