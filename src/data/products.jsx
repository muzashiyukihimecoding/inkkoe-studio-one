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
      category: ["keychain", "accessories"],
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
      category: "mugs"  ,
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
      name: "Kemasan Produk Alumunium Foil Multi-layer Laminate Zipper",
      // price: 925999,
      originalPrice: 4099,
      discount: 8,
      rating: 4.3,
      reviews: 200,
      location: "Tangerang, Banten",
      category: "gaming",
      image: "https://i.pinimg.com/736x/48/a7/a8/48a7a8084ed9199cbc5ed2502b3d2a0c.jpg",
      tags: ["Bussiness Essentials"],
      seller: "Kemas.in Aja",
      get price() {
         return Math.round(this.originalPrice * (1 - this.discount / 100));
      },
   },
   {
      id: 7,
      name: "iPhone Flower Graphic Softcase Silicone Anti-bacterial",
      // price: 27000,
      originalPrice: 65999,
      discount: 23,
      rating: 4.5,
      reviews: 150,
      location: "Bandung",
      category: "accessories",
      image: "https://i.pinimg.com/736x/5f/74/79/5f7479484becb20f9b3b54945b64b41d.jpg",
      tags: ["New"],
      seller: "Hape Majapahit",
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
      image: "",
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
      category: "accessories",
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
      count: products.filter((p) => p.category.includes("hoodie")).length,
   },
   {
      id: "keychain",
      name: "Keychain",
      count: products.filter((p) => p.category.includes("keychain")).length,
   },
   {
      id: "t-shirt",
      name: "T-Shirt",
      count: products.filter((p) => p.category.includes("t-shirt")).length,
   },
];

export { products, categories };
