import React, { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(token ? jwt_decode(token) : null);

  useEffect(() => {
    if (token) { localStorage.setItem('token', token); setUser(jwt_decode(token)); }
    else { localStorage.removeItem('token'); setUser(null); }
  }, [token]);

  const logout = () => setToken(null);
  return <AuthContext.Provider value={{ token, setToken, user, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
