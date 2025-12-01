import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import CustomTabs from "../components/CustomTabs";

export default function KategoriPilihan() {
   const kategori = [
      {
         nama: "T-shirt",
         // img: <img src="./src/assets/imgs/kaos-putih-polos.png" alt="icon" />,
         img: (
            <img
               src="https://i.pinimg.com/736x/b7/85/50/b785506d41fa65714bef7a1358626164.jpg"
               alt="icon"
            />
         ),
         desc: "Sablon Premium",
      },
      {
         nama: "Hoodie & Jacket",
         // img: <img src="./src/assets/imgs/hoodie-putih-polos.png" alt="icon" />,
         img: (
            <img
               src="https://i.pinimg.com/736x/5b/c3/81/5bc381f804f02b64e805e25b5410f1d9.jpg"
               alt="icon"
            />
         ),
         desc: "Bahan Tebal",
      },
      {
         nama: "Totebag",
         // img: <img src="./src/assets/imgs/hoodie-putih-polos.png" alt="icon" />,
         img: (
            <img
               src="https://i.pinimg.com/736x/1c/ba/af/1cbaaf3be36dfc51d320fcd9e7bf889b.jpg"
               alt="icon"
            />
         ),
         desc: "Bahan Tebal",
      },
      {
         nama: "Sticker & Keychain",
         // img: <img src="./src/assets/imgs/hoodie-putih-polos.png" alt="icon" />,
         img: (
            <img
               src="https://i.pinimg.com/736x/f2/1f/f2/f21ff2b64ad81adb6fdc89c4c731f954.jpg"
               alt="icon"
            />
         ),
         desc: "Bahan Tebal",
      },
   ];

   return (
      <div className="kategori-container">
         <div className="kategori-grid">
            <div className="kategori-left">
               <h2>Pilihan Populer</h2>

               <div className="kategori-list">
                  {kategori.map((item, i) => (
                     <div className="kategori-card" key={i}>
                        {item.img}
                        <p className="kategori-title">{item.nama}</p>
                        <p className="kategori-desc">{item.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="kategori-tags">
                  <button>Kaos</button>
                  <button>Hoodie</button>
                  <button>Totebag</button>
                  <button>Sticker</button>
                  <button>Mug Custom</button>
                  <button>Phone Case</button>
               </div>
            </div>

            <div className="kategori-right">
               <div className="custom-header">
                  <h2>Custom Produk</h2>
                  <span className="lihat-semua">Lihat Semua</span>
               </div>

               <div className="custom-tabs">
                  {/* <span className="active">Kaos</span>
                  <span>Hoodie</span>
                  <span>Totebag</span>
                  <span>Lainnya</span> */}

                  <CustomTabs />
               </div>

               <div className="custom-form">
                  <div className="form-group">
                     <label>Nama Produk</label>
                     <input type="text" placeholder="Contoh: Kaos Premium" />
                  </div>
                  <div className="form-group">
                     <label>Warna</label>
                     <select>
                        <option>Hitam</option>
                        <option>Putih</option>
                        <option>Navy</option>
                        <option>Maroon</option>
                     </select>
                  </div>
                  <div className="form-group">
                     <label>Ukuran</label>
                     <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                     </select>
                  </div>

                  <Link to="/customize" className="cta">
                     Custom Sekarang
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
