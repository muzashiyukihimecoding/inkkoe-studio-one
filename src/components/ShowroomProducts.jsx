import React, { useState } from "react";
import { products, categories } from "../data/products";

export default function ProductShowroom() {
   const [activeCategory, setActiveCategory] = useState("all");
   const [sortBy, setSortBy] = useState("popular");

   // Data produk berdasarkan gambar yang diberikan. Dalam implementasi nyata, data ini biasanya diambil dari API atau database.

   // Saat ini API belum tersedia, Anda hanya perlu memasukkan originalPrice dan discount, lalu price akan dihitung otomatis melalui get price()

   // Data products dan categories di-import dari ../data/products.jsx

   // Filter produk berdasarkan kategori
   const filteredProducts =
      activeCategory === "all"
         ? products
         : products.filter((product) =>
              product.category.includes(activeCategory)
           );

   // Sort produk
   const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
         case "price-low":
            return a.price - b.price;
         case "price-high":
            return b.price - a.price;
         case "rating":
            return b.rating - a.rating;
         case "discount":
            return b.discount - a.discount;
         default: // popular
            return b.reviews - a.reviews;
      }
   });

   const formatPrice = (price) => {
      return new Intl.NumberFormat("id-ID", {
         style: "currency",
         currency: "IDR",
         minimumFractionDigits: 0,
      }).format(price);
   };

   return (
      <div className="product-showroom">
         {/* Header Showroom */}
         <div className="showroom-header">
            <div className="header-content">
               <h1>Showroom Produk</h1>
               <p>
                  Temukan produk terbaik dengan kualitas premium dan harga
                  terjangkau
               </p>
            </div>
            <div className="header-stats">
               <div className="stat">
                  <span className="stat-number">{products.length}+</span>
                  <span className="stat-label">Produk</span>
               </div>
               <div className="stat">
                  <span className="stat-number">4.4</span>
                  <span className="stat-label">Rating Rata-rata</span>
               </div>
               <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Original</span>
               </div>
            </div>
         </div>

         {/* Filter dan Sort */}
         <div className="showroom-controls">
            <div className="category-filters">
               {categories.map((category) => (
                  <button
                     key={category.id}
                     className={`category-filter ${
                        activeCategory === category.id ? "active" : ""
                     }`}
                     onClick={() => setActiveCategory(category.id)}
                  >
                     {category.name}
                     <span className="product-count">{category.count}</span>
                  </button>
               ))}
            </div>

            <div className="sort-controls">
               <label>Urutkan:</label>
               <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
               >
                  <option value="popular">Paling Populer</option>
                  <option value="rating">Rating Tertinggi</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="discount">Diskon Terbesar</option>
               </select>
            </div>
         </div>

         {/* Grid Produk */}
         <div className="products-grid">
            {sortedProducts.map((product) => (
               <div key={product.id} className="product-card">
                  {/* Badge Diskon */}
                  {product.discount > 0 && (
                     <div className="discount-badge">-{product.discount}%</div>
                  )}

                  {/* Tags */}
                  <div className="product-tags">
                     {product.tags.map((tag, index) => (
                        <span key={index} className="product-tag">
                           {tag}
                        </span>
                     ))}
                  </div>

                  {/* Gambar Produk */}
                  <div className="product-image">
                     <img src={product.image} alt={product.name} />
                     <div className="product-overlay">
                        <button className="quick-view-btn">Lihat Cepat</button>
                        <button className="wishlist-btn">❤</button>
                     </div>
                  </div>

                  {/* Info Produk */}
                  <div className="product-info">
                     <h3 className="product-name">{product.name}</h3>
                     <p className="product-seller">{product.seller}</p>

                     {/* Rating */}
                     <div className="product-rating">
                        <div className="stars">
                           {"★".repeat(Math.floor(product.rating))}
                           {"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span className="rating-text">
                           {product.rating} ({product.reviews}+ ulasan)
                        </span>
                     </div>

                     {/* Harga */}
                     <div className="product-pricing">
                        <span className="current-price">
                           {formatPrice(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                           <span className="original-price">
                              {formatPrice(product.originalPrice)}
                           </span>
                        )}
                     </div>

                     {/* Lokasi */}
                     <div className="product-location">
                        <span className="location-icon">📍</span>
                        {product.location}
                     </div>

                     {/* Tombol Aksi */}
                     <div className="product-actions">
                        <button className="add-to-cart-btn">+ Keranjang</button>
                        <button className="buy-now-btn">Beli Sekarang</button>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Load More */}
         <div className="load-more-section">
            <button className="load-more-btn">Muat Lebih Banyak Produk</button>
         </div>
      </div>
   );
}
