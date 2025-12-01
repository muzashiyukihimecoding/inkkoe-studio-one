import { useState, useRef, useEffect } from "react";
// import "./Tabs.css";

const categories = ["Kaos", "Hoodie", "Totebag", "Lainnya"];

export default function CustomTabs() {
   const [active, setActive] = useState(0);
   const underlineRef = useRef(null);
   const tabsRef = useRef([]);

   useEffect(() => {
      const currentTab = tabsRef.current[active];
      underlineRef.current.style.width = currentTab.offsetWidth + "px";
      underlineRef.current.style.left = currentTab.offsetLeft + "px";
   }, [active]);

   return (
      <div className="tabs-container">
         {categories.map((cat, index) => (
            <button
               key={cat}
               ref={(el) => (tabsRef.current[index] = el)}
               className={`tab-btn ${active === index ? "active" : ""}`}
               onClick={() => setActive(index)}
            >
               {cat}
            </button>
         ))}

         <span className="underline" ref={underlineRef}></span>
      </div>
   );
}
