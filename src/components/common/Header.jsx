import { Link } from "react-router-dom";
import CategoryDropdown from "../CategoryDropdown";

const navItems = [
   { path: "/home", label: "Home" },
   { path: "/customize", label: "Customize Products" },
   { path: "/cart", label: "Cart" },
   { path: "/chat", label: "Chat" },
   { path: "/notif", label: "Notif" },
   { path: "/marketkoe", label: "MarketKoe" },
   { path: "/profile", label: "Profile" },
];

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

         {/* <span className="hd-category">Category</span> */}
         {/* <div className="hd-category">
            <span>Category</span>
         </div> */}
         <CategoryDropdown />

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
            </div>
         </div>
      </header>
   );
}
