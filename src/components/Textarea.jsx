// src/components/CustomTextarea/CustomTextarea.jsx
import React, { useState, useRef } from "react";
// import "./CustomTextarea.css";

const CustomTextarea = ({
   value = "",
   onChange,
   placeholder = "Tambahkan catatan untuk customisasi...",
   maxLength = 500,
   label = "Catatan Kustomisasi",
   required = false,
}) => {
   const [isFocused, setIsFocused] = useState(false);
   const [charCount, setCharCount] = useState(value.length);
   const textareaRef = useRef(null);

   const handleChange = (e) => {
      const newValue = e.target.value;
      setCharCount(newValue.length);
      if (onChange) {
         onChange(newValue);
      }
   };

   const handleFocus = () => {
      setIsFocused(true);
   };

   const handleBlur = () => {
      setIsFocused(false);
   };

   const clearText = () => {
      setCharCount(0);
      if (onChange) {
         onChange("");
      }
      if (textareaRef.current) {
         textareaRef.current.focus();
      }
   };

   return (
      <div className="custom-textarea-v2">
         {/* Header */}
         <div className="textarea-header-v2">
            <label className="textarea-label-v2">
               {label}
               {required && <span className="required-star">*</span>}
            </label>
            <div className="char-counter-v2">
               {charCount}/{maxLength}
            </div>
         </div>

         {/* Textarea */}
         <div
            className={`textarea-wrapper-v2 ${isFocused ? "focused" : ""} ${
               value ? "has-value" : ""
            }`}
         >
            <textarea
               ref={textareaRef}
               value={value}
               onChange={handleChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
               placeholder={placeholder}
               maxLength={maxLength}
               className="textarea-field-v2"
               rows={4}
            />

            {value && (
               <button
                  type="button"
                  className="clear-btn-v2"
                  onClick={clearText}
                  aria-label="Hapus teks"
               >
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                  >
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
               </button>
            )}
         </div>

         {/* Progress Indicator */}
         <div className="progress-indicator-v2">
            <div
               className="progress-bar-v2"
               style={{
                  width: `${Math.min((charCount / maxLength) * 100, 100)}%`,
                  backgroundColor:
                     charCount >= maxLength
                        ? "#dc2626"
                        : charCount > maxLength * 0.8
                        ? "#f59e0b"
                        : "#10b981",
               }}
            />
         </div>

         {/* Helper Text */}
         <div className="helper-text-v2">
            💡 Jelaskan detail customisasi yang Anda inginkan untuk hasil
            terbaik
         </div>
      </div>
   );
};

export default CustomTextarea;
