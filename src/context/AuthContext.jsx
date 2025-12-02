// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Cek localStorage saat pertama load
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
         setUser(JSON.parse(storedUser));
      }
      setLoading(false);
   }, []);

   const login = (userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
   };

   const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
   };

   const signup = (userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
   };

   return (
      <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
         {children}
      </AuthContext.Provider>
   );
};
