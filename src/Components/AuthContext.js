import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform login logic, set user data after successful login
    setUser(userData);
  };

  const logout = () => {
    // Clear user data on logout
    setUser(null);
    // Optionally, you can clear any tokens or data stored in localStorage/sessionStorage here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
