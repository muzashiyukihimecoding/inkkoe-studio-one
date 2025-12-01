// src/components/Loading/Loading.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLoading = () => {
   const [isLoading, setIsLoading] = useState(false);
   const location = useLocation();

   useEffect(() => {
      // Set loading true ketika route berubah
      setIsLoading(true);

      // Simulasikan loading time (bisa disesuaikan)
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 800); // 800ms loading time

      return () => clearTimeout(timer);
   }, [location]);

   return isLoading;
};

const Loading = () => {
   return (
      <div className="loading-overlay">
         <div className="loading-content">
            <div className="loading-spinner">
               <div className="spinner-circle"></div>
               <div className="spinner-circle"></div>
               <div className="spinner-circle"></div>
            </div>
            <p className="loading-text">Memuat halaman...</p>
         </div>
      </div>
   );
};

export default Loading;
