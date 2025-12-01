// src/components/Footer/Footer.jsx
import React from "react";
// import './Footer.css'

export default function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer-content">
               {/* Bagian utama footer dengan grid */}
               <img
                  src="https://i.pinimg.com/736x/fc/01/88/fc0188b570865b9feac769436aad9e44.jpg"
                  className="footer-logo"
               ></img>
               <div className="footer-grid">
                  {/* Tentang Perusahaan */}
                  <div className="footer-section">
                     <h3 className="footer-title">InkKoe Studio</h3>
                     <ul className="footer-links">
                        <li>
                           <a href="/about">Tentang InkKoe</a>
                        </li>
                        <li>
                           <a href="/careers">Karir</a>
                        </li>
                        <li>
                           <a href="/blog">Blog</a>
                        </li>
                        <li>
                           <a href="/affiliate">Program Afiliasi</a>
                        </li>
                        <li>
                           <a href="/wholesale">InkKoe B2B</a>
                        </li>
                        <li>
                           <a href="/brand">Solusi Pemasaran</a>
                        </li>
                     </ul>
                  </div>

                  {/* Beli */}
                  <div className="footer-section">
                     <h3 className="footer-title">Beli</h3>
                     <ul className="footer-links">
                        <li>
                           <a href="/tagihan">Produk Populer</a>
                        </li>
                        <li>
                           <a href="/cod">InkKoe COD</a>
                        </li>
                        <li>
                           <a href="/gratis-ongkir">Gratis Ongkir</a>
                        </li>
                        <li>
                           <a href="/deals">Penawaran Spesial</a>
                        </li>
                        <li>
                           <a href="/kupon">Kupon Saya</a>
                        </li>
                     </ul>
                  </div>

                  {/* Jual */}
                  <div className="footer-section">
                     <h3 className="footer-title">Jual</h3>
                     <ul className="footer-links">
                        <li>
                           <a href="/seller-center">Pusat Penjual</a>
                        </li>
                        <li>
                           <a href="/register-seller">Daftar Jadi Penjual</a>
                        </li>
                        <li>
                           <a href="/seller-promo">Promo Penjual</a>
                        </li>
                        <li>
                           <a href="/seller-guide">Panduan Penjual</a>
                        </li>
                     </ul>
                  </div>

                  {/* Bantuan & Panduan */}
                  <div className="footer-section">
                     <h3 className="footer-title">Bantuan & Panduan</h3>
                     <ul className="footer-links">
                        <li>
                           <a href="/help">InkKoe Care</a>
                        </li>
                        <li>
                           <a href="/syarat-ketentuan">Syarat & Ketentuan</a>
                        </li>
                        <li>
                           <a href="/kebijakan-privasi">Kebijakan Privasi</a>
                        </li>
                        <li>
                           <a href="/panduan-keamanan">Panduan Keamanan</a>
                        </li>
                        <li>
                           <a href="/faq">Pusat Bantuan</a>
                        </li>
                     </ul>
                  </div>

                  {/* Download App */}
                  <div className="footer-section">
                     <h3 className="footer-title">Download Aplikasi</h3>
                     <div className="app-download">
                        <p>Nikmati keuntungan spesial di aplikasi:</p>
                        <div className="app-features">
                           <label className="feature-check">
                              <input type="checkbox" checked readOnly />
                              <span>Diskon 70% hanya di aplikasi</span>
                           </label>
                           <label className="feature-check">
                              <input type="checkbox" checked readOnly />
                              <span>Termurah dan bisa custom sendiri</span>
                           </label>
                           <label className="feature-check">
                              <input type="checkbox" checked readOnly />
                              <span>Gratis Ongkir tanpa minimum</span>
                           </label>
                        </div>
                        <div className="download-buttons">
                           <a href="#" className="download-btn">
                              <img
                                 src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                 alt="Google Play"
                              />
                           </a>
                           <a href="#" className="download-btn">
                              <img
                                 src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                 alt="App Store"
                              />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Social Media & Copyright */}
               <div className="footer-bottom">
                  <div className="footer-social">
                     <h4>Ikuti Kami</h4>
                     <div className="social-links">
                        <a href="#" aria-label="Facebook">
                           📘
                        </a>
                        <a href="#" aria-label="Twitter">
                           🐦
                        </a>
                        <a href="#" aria-label="Instagram">
                           📷
                        </a>
                        <a href="#" aria-label="YouTube">
                           📺
                        </a>
                        <a href="#" aria-label="TikTok">
                           🎵
                        </a>
                     </div>
                  </div>

                  <div className="footer-copyright">
                     <div className="copyright-text">
                        © 2023 - {new Date().getFullYear()}, InkKoeStudio Co.
                        Indonesia. All Rights Reserved.
                     </div>
                     <div className="payment-methods">
                        <span>Metode Pembayaran:</span>
                        <div className="payment-icons">
                           <span>💳</span>
                           <span>🏦</span>
                           <span>📱</span>
                           <span>🔗</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
