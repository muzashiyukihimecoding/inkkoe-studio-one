import { useState, useRef, useEffect } from "react";

export default function CategoryDropdown() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [activeCategory, setActiveCategory] = useState(null);
   const dropdownRef = useRef(null);

   // Data kategori berdasarkan konten yang diberikan
   const categories = [
      {
         id: "red-bulv",
         name: "Red & Bulv!",
         subcategories: [
            "Korisholian",
            "Kompolite & Luding",
            "Logam Mufia",
            "Malima & Hedi",
            "Mukusan & Minmina",
            "Office & Stationery",
            "Okiniraja",
            "Olomelli",
            "Peruvadian Heroin",
         ],
      },
      {
         id: "office-stationery",
         name: "Office & Stationery",
         subcategories: [
            {
               name: "Akii Tafu",
               items: [
                  "Okinirajan (Top-Ex)",
                  "Ngirigijaya",
                  "Janyika",
                  "Koca Perchasar",
                  "Kapar Tafa",
                  "Palav Muri Tafa",
                  "Papan Tafa & Tempek",
                  "Pengapila",
                  "Penghasa",
                  "Pecal",
                  "Papan",
                  "Ruzdar",
                  "Sadeh",
               ],
            },
            {
               name: "Document Organizer",
               items: [
                  "Benzin",
                  "Benzin",
                  "Kalender",
                  "Kilp Kabat",
                  "Kotka Karla Nama",
                  "Layazid",
                  "Lamuri Fehr - Filthy Cabinet",
                  "Map",
                  "Name: Top & D: Cost Holder",
                  "Others",
                  "Perchadan Buku",
                  "Ras Kaitra",
                  "Stationery Stand",
               ],
            },
            {
               name: "Kirtina",
               items: [
                  "Kirtina Blooker",
                  "Kirtina Fisk",
                  "Kirtina Felis",
                  "Kirtina IHS",
                  "Kirtina Katrina",
                  "Kirtina Thermal",
                  "Sticky Notes",
               ],
            },
            {
               name: "Kirtina Swel",
               items: [
                  "Inpatboard",
                  "Kirtina Asiano",
                  "Kirtina Chapa",
                  "Kirtina Cuyatti",
                  "Kirtina Chujita",
                  "Woman Peterson",
                  "GSM24000501",
               ],
            },
            {
               name: "Penghasa & Percival",
               items: [
                  "Coast Hotel",
                  "Double Tree",
                  "Kilp Kirilta",
                  "Lam Kirtita",
                  "Lam Sintegana",
                  "Seedy & Lakkan",
                  "Staples",
                  "Slave & Label",
               ],
            },
            {
               name: "Persadan Jabili",
               items: ["Kato dan Buhan", "Kunling", "Manuela", "Jawaharlalım"],
            },
            {
               name: "Persadan Meregambar",
               items: [
                  "Kato, Gunma & Shichia",
                  "Okucada",
                  "Crayon",
                  "Drawing Pen",
                  "Pensil Wanna",
                  "Spider Wanna",
                  "Stencil",
               ],
            },
            {
               name: "Perkingkagan Kafigrafi",
               items: [
                  "Brush Pen",
                  "No",
                  "Pajuan Kafigrafi",
                  "Trish & Kara Kafigrafi",
               ],
            },
         ],
      },
      {
         id: "kategori",
         name: "Kategori",
         subcategories: [
            "Hexophone & Tablet",
            "Top-Lip & Tagiban",
            "Elektronik",
            "Peruvadian Heroin",
            "Kouangan",
            "Komputer & Laplop",
         ],
      },
   ];

   // Menutup dropdown ketika klik di luar
   useEffect(() => {
      function handleClickOutside(event) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
         ) {
            setIsDropdownOpen(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   const handleBackToMain = () => {
      setActiveCategory(null);
   };

   return (
      <div className="hd-category" ref={dropdownRef}>
         <span
            className="category-trigger"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
         >
            Category
         </span>

         {isDropdownOpen && (
            <div className="dropdown-menu">
               {!activeCategory ? (
                  // Menu kategori utama
                  <div className="categories-list">
                     {categories.map((category) => (
                        <div
                           key={category.id}
                           className="category-item"
                           onClick={() => handleCategoryClick(category)}
                        >
                           {category.name}
                        </div>
                     ))}
                  </div>
               ) : (
                  // Subkategori
                  <div className="subcategories-panel">
                     <div className="subcategory-header">
                        <button
                           className="back-button"
                           onClick={handleBackToMain}
                        >
                           ← Back
                        </button>
                        <h3>{activeCategory.name}</h3>
                     </div>

                     <div className="subcategories-list">
                        {activeCategory.subcategories.map((sub, index) => (
                           <div key={index} className="subcategory-item">
                              {typeof sub === "string" ? (
                                 <div className="simple-subcategory">{sub}</div>
                              ) : (
                                 <div className="nested-subcategory">
                                    <div className="subcategory-name">
                                       {sub.name}
                                    </div>
                                    {sub.items && (
                                       <div className="subcategory-items">
                                          {sub.items.map((item, idx) => (
                                             <div
                                                key={idx}
                                                className="subcategory-item-name"
                                             >
                                                {item}
                                             </div>
                                          ))}
                                       </div>
                                    )}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
