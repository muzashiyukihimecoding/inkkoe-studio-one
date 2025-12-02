import React, { useEffect, useState } from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import BannerSlider from "../components/BannerSlider";
import KategoriPilihan from "../components/BannerCategories";
import ProductShowroom from "../components/ShowroomProducts";

export default function Home() {
   return (
      <div className="main">
         <BannerSlider />
         <KategoriPilihan />

         {/* cuma garis pembatas */}
         <div className="divider">
            <div className="inner-divider"></div>
         </div>

         {/* Showroom Produk POD */}
         <ProductShowroom />
      </div>
   );
}
