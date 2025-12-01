import React, { useState } from "react";

export default function ProductShowroom() {
   const [activeCategory, setActiveCategory] = useState("all");
   const [sortBy, setSortBy] = useState("popular");

   // Data produk berdasarkan gambar yang diberikan. Dalam implementasi nyata, data ini biasanya diambil dari API atau database.

   // Sebelum API, Anda hanya perlu memasukkan originalPrice dan discount, lalu price akan dihitung otomatis melalui get price()
   const products = [
      {
         id: 1,
         name: "T-shirt putih polos premium custom sendiri",
         // price: 92399,
         originalPrice: 61300,
         discount: 23,
         rating: 4.3,
         reviews: 100,
         location: "Jakarta Utara",
         category: "t-shirt",
         image: "https://i.pinimg.com/736x/e0/ef/39/e0ef39d3aaab4ec48ff0f03a8bc195de.jpg",
         tags: ["Best Seller", "New"],
         seller: "Badak Bercula",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 2,
         name: "Kaos item polos premium custom sendiri",
         // price: 92799,
         originalPrice: 128799,
         discount: 16,
         rating: 4.8,
         reviews: 100,
         location: "Jakarta Utara",
         category: "t-shirt",
         image: "https://i.pinimg.com/736x/e4/51/fc/e451fce1f82ded9baa00a265eabc19f5.jpg",
         tags: ["Popular"],
         seller: "Badak Bercula",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 3,
         name: "Keychain Putih Label Badge-Shaped Self-Customized",
         // price: 8599,
         originalPrice: 12999,
         discount: 19,
         rating: 3.9,
         reviews: 250,
         location: "Klaten, Solo",
         category: "keychain",
         image: "https://i.pinimg.com/736x/d0/94/79/d09479fd8672aa4b0223b62ff199810a.jpg",
         tags: ["Official Store"],
         seller: "Alleron Mockups",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 4,
         name: "Mug Keramik Putih Coffee&Create Premium",
         // price: 72599,
         originalPrice: 128999,
         discount: 23,
         rating: 4.2,
         reviews: 670,
         location: "Surabaya Gubeng",
         category: "mugs",
         image: "https://i.pinimg.com/736x/01/5f/a4/015fa43360dcf2a10814089231ae4a70.jpg",
         tags: ["Premium"],
         seller: "Coffee&Create Creative Indonesia",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 5,
         name: "Mountain of Acrylic T-shirt Supima Cotton",
         // price: 48999,
         originalPrice: 97599,
         discount: 49,
         rating: 4.3,
         reviews: 500,
         location: "Jakarta Utara",
         category: "t-shirt",
         image: "https://i.pinimg.com/736x/6a/73/59/6a7359f03723294ffdf887723ea0227a.jpg",
         tags: ["Cheap"],
         seller: "Kota Administrat Jakarta Uzu",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 6,
         name: "Sport Gaming turd gaming",
         // price: 925999,
         originalPrice: 1200000,
         discount: 23,
         rating: 4.3,
         reviews: 200,
         location: "Tangerang",
         category: "gaming",
         image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
         tags: ["Gaming"],
         seller: "Kota Teigening",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 7,
         name: "Versión Exact ICMR 2.0 vK",
         // price: 27000,
         originalPrice: 35000,
         discount: 23,
         rating: 4.5,
         reviews: 150,
         location: "Bandung",
         category: "accessories",
         image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400&h=300&fit=crop",
         tags: ["New"],
         seller: "Tech Store",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 8,
         name: "ARCTIC MK 6 (ULTIMATE)",
         // price: 108000,
         originalPrice: 135000,
         discount: 20,
         rating: 4.7,
         reviews: 89,
         location: "Surabaya",
         category: "gaming",
         image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
         tags: ["Premium"],
         seller: "Gaming Corp",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 9,
         name: "REJOY STOC Magnetic Titer 4",
         // price: 24800,
         originalPrice: 31000,
         discount: 20,
         rating: 4.2,
         reviews: 75,
         location: "Jakarta Selatan",
         category: "accessories",
         image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop",
         tags: ["Magnetic"],
         seller: "Tech Innovations",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 10,
         name: "GE GMP09 7 Virtual Servant",
         // price: 24800,
         originalPrice: 31000,
         discount: 20,
         rating: 4.1,
         reviews: 62,
         location: "Medan",
         category: "electronics",
         image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=300&fit=crop",
         tags: ["Virtual"],
         seller: "Smart Home Inc",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 11,
         name: "Bear Assistent Crystal Crypto",
         // price: 87000,
         originalPrice: 109000,
         discount: 20,
         rating: 4.4,
         reviews: 120,
         location: "Bali",
         category: "electronics",
         image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
         tags: ["AI", "New"],
         seller: "Crypto Tech",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
      {
         id: 12,
         name: 'Totebag Lucu Gambar Sepeda Jaman Dulu "Vintage Bike"',
         // price: 1238000,
         originalPrice: 14599,
         discount: 10,
         rating: 4.6,
         reviews: 410,
         location: "Ciledug, Cirebon",
         category: "aksesoris",
         image: "https://i.pinimg.com/474x/a6/c9/dd/a6c9dd5df20b167602ade1d59ab097e0.jpg",
         tags: ["Most Wanted", "Premium"],
         seller: "Kuraalabakan Jabar",
         get price() {
            return Math.round(this.originalPrice * (1 - this.discount / 100));
         },
      },
   ];

   const categories = [
      { id: "all", name: "Semua Produk", count: products.length },
      {
         id: "hoodie",
         name: "Hoodie",
         count: products.filter((p) => p.category === "hoodie").length,
      },
      {
         id: "keychain",
         name: "Keychain",
         count: products.filter((p) => p.category === "keychain").length,
      },
      {
         id: "t-shirt",
         name: "T-Shirt",
         count: products.filter((p) => p.category === "t-shirt").length,
      },
   ];

   // Filter produk berdasarkan kategori
   const filteredProducts =
      activeCategory === "all"
         ? products
         : products.filter((product) => product.category === activeCategory);

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
