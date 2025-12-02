import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { useLoading } from "./components/Loading";
// import { AuthProvider } from "./context/AuthContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import CustomizationPage from "./pages/CustomProducts";
import Cart from "./pages/Cart";
import Chat from "./pages/Chat";
import Notif from "./pages/Notif";
import MarketKoe from "./pages/MarketKoe";
import Profile from "./pages/Profile";
import LoginPage from "./pages/accounts/Login";
import SignupPage from "./pages/accounts/Signup";
import ProtectedRoute from "./context/ProtectedRoute";

export default function App() {
   return (
      // <AuthProvider>
      // <Router>
      <div className="app">
         <Header />
         <Routes>
            {/* {isLoading && <Loading />} */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/customize" element={<CustomizationPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notif" element={<Notif />} />
            <Route path="/marketkoe" element={<MarketKoe />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route
                  path="/profile"
                  element={
                     <ProtectedRoute>
                        <Profile />
                     </ProtectedRoute>
                  }
               /> */}
         </Routes>
         <Footer />
      </div>
      // </Router>
      // </AuthProvider>
   );
}
