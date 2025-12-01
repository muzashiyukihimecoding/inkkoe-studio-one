import React, { useState, useEffect } from "react";

export default function BannerSlider() {
   const slides = [
      {
         id: 4,
         img: "https://i.pinimg.com/1200x/77/e0/e8/77e0e8a7087306a8377d41788ac804f6.jpg",
      },
      {
         id: 2,
         img: "https://i.pinimg.com/736x/e2/60/cf/e260cfb3c8fc628e90538a2dfbb6e65e.jpg",
      },
      {
         id: 3,
         img: "https://i.pinimg.com/736x/64/92/e9/6492e92ba27852433d6e00fd82c757ac.jpg",
      },
      {
         id: 1,
         img: "https://i.pinimg.com/736x/52/e1/05/52e105535528f7fd236ef1d221e1dae5.jpg",
      },
   ];

   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prev) => (prev + 1) % slides.length);
      }, 8000);

      return () => clearInterval(interval);
   }, [slides.length]);

   // Fungsi untuk navigasi manual
   const goToSlide = (slideIndex) => {
      setIndex(slideIndex);
   };

   // Fungsi untuk navigasi otomatis
   const goToNext = () => {
      setIndex((prev) => (prev + 1) % slides.length);
   };

   const goToPrev = () => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
   };

   return (
      <div className="slider-container">
         <div className="slider-wrapper">
            {slides.map((slide, i) => (
               <div
                  key={slide.id}
                  className={`slide ${i === index ? "active" : ""}`}
                  style={{ backgroundImage: `url(${slide.img})` }}
               ></div>
            ))}
         </div>

         {/* Tombol navigasi */}
         <button className="slider-btn prev" onClick={goToPrev}>
            ‹
         </button>
         <button className="slider-btn next" onClick={goToNext}>
            ›
         </button>

         {/* Indikator dots */}
         <div className="slider-dots">
            {slides.map((_, i) => (
               <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
               ></span>
            ))}
         </div>
      </div>
   );
}
