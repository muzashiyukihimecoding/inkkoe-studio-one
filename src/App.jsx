import React from "react";
import { Routes, Route } from "react-router-dom";

import { useLoading } from "./components/Loading";

import Home from "./pages/Home";
import CustomizationPage from "./pages/CustomProducts";
import Cart from "./pages/Cart";
import Chat from "./pages/Chat";
import Notif from "./pages/Notif";
import MarketKoe from "./pages/MarketKoe";
import Profile from "./pages/Profile";

export default function App() {
   return (
      <div className="app">
         {/* {isLoading && <Loading />} */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/customize" element={<CustomizationPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notif" element={<Notif />} />
            <Route path="/marketkoe" element={<MarketKoe />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
      </div>
   );
}
