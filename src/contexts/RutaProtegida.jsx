// src/components/RutaProtegida.jsx

import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children }) {
  const { user, isLoadingAuth } = useAuthContext();

  if (isLoadingAuth) return <                                                             p>Cargando autenticación...</p>;
  if (!user) return <Navigate to="/login" />;
  return children;
}
