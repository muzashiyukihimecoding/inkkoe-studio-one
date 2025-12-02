import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// import CategoryDropdown from "../CategoryDropdown";

const navItems = [
   { path: "/home", label: "Home" },
   { path: "/customize", label: "Customize Products" },
   { path: "/cart", label: "Cart" },
   { path: "/chat", label: "Chat" },
   { path: "/notif", label: "Notif" },
   { path: "/marketkoe", label: "MarketKoe" },
   { path: "/profile", label: "Profile" },
   { path: "/login", label: "Login" },
   { path: "/signup", label: "Sign Up" },
];

// Login Auth
// const { user, logout } = useAuth();
// const navigate = useNavigate();

// const handleLogout = () => {
//    logout();
//    navigate("/");
// };

export default function Header() {
   return (
      <header className="header">
         <div className="hd-left">
            <a href="/" className="hd-logo">
               <img
                  src="https://i.pinimg.com/736x/fc/01/88/fc0188b570865b9feac769436aad9e44.jpg"
                  alt=""
                  className="header-logo-img"
               />
               {/* <span className="studio">Studio</span> */}
            </a>
         </div>

         <CategoryDropdown />
         {/* <span className="hd-category">Category</span> */}
         {/* <div className="hd-category">
            <span>Category</span>
         </div> */}

         <div className="hd-search-bar">
            <span className="hd-search-icon">🔍</span>
            <input type="text" placeholder="Cari produk POD" />
         </div>

         <div className="hd-right">
            <Link to="/cart">🛒</Link>
            <Link to="/chat">📩</Link>
            <Link to="/notif">🔔</Link>

            <div className="hd-right-menu">
               <Link to="/marketkoe" className="hd-rm-market">
                  <img
                     src="https://img.icons8.com/?size=100&id=65006&format=png&color=000000"
                     alt=""
                  />
                  {/* <span>MarketKoe</span> */}
               </Link>

               <Link to="/profile" className="hd-rm-profile">
                  <img
                     src="https://i.pinimg.com/736x/12/e7/66/12e766972089e8ad3771982884a996af.jpg"
                     alt=""
                  />
                  <span>Yukihime</span>
               </Link>

               {/* Profile Handling */}
               {/* <div>
                  {user ? (
                     <div className="profile-dropdown">
                        <button className="profile-btn">
                           {user.profilePicture ? (
                              <img
                                 src={user.profilePicture}
                                 alt="Profile"
                                 className="profile-pic"
                              />
                           ) : (
                              <div className="profile-icon">
                                 {user.name.charAt(0).toUpperCase()}
                              </div>
                           )}
                           <span>{user.name}</span>
                        </button>

                        <div className="dropdown-menu">
                           <Link to="/profile" className="dropdown-item">
                              My Profile
                           </Link>
                           <Link to="/settings" className="dropdown-item">
                              Settings
                           </Link>
                           <button
                              onClick={handleLogout}
                              className="dropdown-item"
                           >
                              Logout
                           </button>
                        </div>
                     </div>
                  ) : (
                     <Link to="/signup" className="signup-btn">
                        <div className="profile-icon empty">👤</div>
                        <span>Sign Up</span>
                     </Link>
                  )}
               </div> */}
            </div>
         </div>
      </header>
   );
}
