import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Carga el usuario (token) de localStorage al montar el provider
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Aquí puedes obtener el username a partir del token, o guardarlo directamente
      // Para simplificar, extraigo el username desde el token fake: 'fake-token-username'
      const username = token.split('fake-token-')[1];
      setUser(username);
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
