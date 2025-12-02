import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CustomTextarea from "../components/Textarea";

export default function CustomizationPage() {
   const location = useLocation();
   const navigate = useNavigate();
   const fileInputRef = useRef(null);

   // Data dari form awal
   const initialData = location.state || {
      productType: "kaos",
      productName: "",
      color: "Putih",
      size: "M",
      material: "Cotton Combed 30s",
      quantity: 1,
      basePrice: 75000,
   };

   const [customizationData, setCustomizationData] = useState({
      ...initialData,
      designFile: null,
      designPreview: null,
      designPosition: "depan",
      designSize: "medium",
      additionalNotes: "",
      customizationPrice: 0,
   });

   const designSizes = {
      small: { price: 0, label: "Kecil" },
      medium: { price: 15000, label: "Medium" },
      large: { price: 25000, label: "Besar" },
      xlarge: { price: 40000, label: "Extra Large" },
   };

   const designPositions = [
      { value: "depan", label: "Bagian Depan" },
      { value: "belakang", label: "Bagian Belakang" },
      { value: "lengan", label: "Lengan" },
      { value: "depan-belakang", label: "Depan & Belakang" },
   ];

   // Handle file upload
   const handleFileUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = (e) => {
            setCustomizationData((prev) => ({
               ...prev,
               designFile: file,
               designPreview: e.target.result,
            }));
         };
         reader.readAsDataURL(file);
      }
   };

   // Handle input changes
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCustomizationData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   // Calculate total price
   const calculateTotalPrice = () => {
      const baseTotal =
         customizationData.basePrice * customizationData.quantity;
      const designPrice =
         designSizes[customizationData.designSize].price *
         customizationData.quantity;
      return baseTotal + designPrice + customizationData.customizationPrice;
   };

   // Handle form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      if (!customizationData.designFile && !customizationData.additionalNotes) {
         alert("Harap upload desain atau berikan catatan untuk customisasi");
         return;
      }

      // Simpan data ke localStorage atau kirim ke backend
      const orderData = {
         ...customizationData,
         totalPrice: calculateTotalPrice(),
         orderDate: new Date().toISOString(),
         orderId: `CUST-${Date.now()}`,
      };

      localStorage.setItem("currentCustomOrder", JSON.stringify(orderData));

      // Redirect ke halaman checkout atau konfirmasi
      navigate("/checkout", { state: orderData });

      console.log("Data customisasi:", orderData);
   };

   return (
      <div className="customization-page main">
         <div className="customization-container">
            {/* Header */}
            <div className="customization-header">
               <h1>InkKoe Custom Produk</h1>
               <p>Lengkapi customisasi produk Anda</p>
            </div>

            <div className="customization-content">
               {/* Sidebar - Ringkasan Produk */}
               <div className="product-summary">
                  <h3>Ringkasan Produk</h3>
                  <div className="summary-item">
                     <span>Jenis Produk:</span>
                     <span>
                        {customizationData.productType.charAt(0).toUpperCase() +
                           customizationData.productType.slice(1)}
                     </span>
                  </div>
                  <div className="summary-item">
                     <span>Nama:</span>
                     <span>{customizationData.productName}</span>
                  </div>
                  <div className="summary-item">
                     <span>Warna:</span>
                     <span>{customizationData.color}</span>
                  </div>
                  <div className="summary-item">
                     <span>Ukuran:</span>
                     <span>{customizationData.size}</span>
                  </div>
                  <div className="summary-item">
                     <span>Material:</span>
                     <span>{customizationData.material}</span>
                  </div>
                  <div className="summary-item">
                     <span>Jumlah:</span>
                     <span>{customizationData.quantity} pcs</span>
                  </div>

                  <div className="price-breakdown">
                     <h4>Rincian Harga</h4>
                     <div className="price-item">
                        <span>Harga Dasar:</span>
                        <span>
                           Rp{" "}
                           {(
                              customizationData.basePrice *
                              customizationData.quantity
                           ).toLocaleString("id-ID")}
                        </span>
                     </div>
                     <div className="price-item">
                        <span>
                           Biaya Desain (
                           {designSizes[customizationData.designSize].label}
                           ):
                        </span>
                        <span>
                           Rp{" "}
                           {(
                              designSizes[customizationData.designSize].price *
                              customizationData.quantity
                           ).toLocaleString("id-ID")}
                        </span>
                     </div>
                     <div className="price-total">
                        <span>Total:</span>
                        <span>
                           Rp {calculateTotalPrice().toLocaleString("id-ID")}
                        </span>
                     </div>
                  </div>
               </div>

               {/* Main Content - Form Customisasi */}
               <div className="customization-form">
                  <form onSubmit={handleSubmit}>
                     {/* Upload Desain */}
                     <div className="form-section">
                        <h3>Upload Desain</h3>
                        <div className="upload-area">
                           <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileUpload}
                              accept="image/*,.pdf,.ai,.eps"
                              style={{ display: "none" }}
                           />
                           {customizationData.designPreview ? (
                              <div className="design-preview">
                                 <img
                                    src={customizationData.designPreview}
                                    alt="Design Preview"
                                 />
                                 <button
                                    type="button"
                                    className="btn-change"
                                    onClick={() =>
                                       fileInputRef.current?.click()
                                    }
                                 >
                                    Ganti Desain
                                 </button>
                              </div>
                           ) : (
                              <div
                                 className="upload-placeholder"
                                 onClick={() => fileInputRef.current?.click()}
                              >
                                 <div className="upload-icon">📁</div>
                                 <p>Klik untuk upload desain</p>
                                 <small>
                                    Format: JPG, PNG, PDF, AI, EPS (Max 10MB)
                                 </small>
                              </div>
                           )}
                        </div>
                     </div>

                     {/* Opsi Desain */}
                     <div className="form-section">
                        <h3>Opsi Desain</h3>
                        <div className="form-row">
                           <div className="form-group">
                              <label>Posisi Desain</label>
                              <select
                                 name="designPosition"
                                 value={customizationData.designPosition}
                                 onChange={handleInputChange}
                              >
                                 {designPositions.map((position) => (
                                    <option
                                       key={position.value}
                                       value={position.value}
                                    >
                                       {position.label}
                                    </option>
                                 ))}
                              </select>
                           </div>

                           <div className="form-group">
                              <label>Ukuran Desain</label>
                              <select
                                 name="designSize"
                                 value={customizationData.designSize}
                                 onChange={handleInputChange}
                              >
                                 {Object.entries(designSizes).map(
                                    ([key, size]) => (
                                       <option key={key} value={key}>
                                          {size.label} (+Rp{" "}
                                          {size.price.toLocaleString("id-ID")})
                                       </option>
                                    )
                                 )}
                              </select>
                           </div>
                        </div>
                     </div>

                     {/* Catatan Tambahan */}
                     <div className="form-section">
                        <h3>Catatan Tambahan</h3>
                        <CustomTextarea />
                     </div>

                     {/* Tombol Aksi */}
                     <div className="action-buttons">
                        <button
                           type="button"
                           className="btn-back"
                           onClick={() => navigate(-1)}
                        >
                           Kembali
                        </button>
                        <button type="submit" className="btn-submit">
                           Lanjut ke Checkout - Rp{" "}
                           {calculateTotalPrice().toLocaleString("id-ID")}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
