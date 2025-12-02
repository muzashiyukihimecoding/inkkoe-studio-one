// pages/SignupPage.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignupPage = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const [error, setError] = useState("");
   const { signup } = useAuth();
   const navigate = useNavigate();

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      if (formData.password !== formData.confirmPassword) {
         setError("Passwords do not match");
         return;
      }

      // Simulasi API call
      const userData = {
         id: Date.now().toString(),
         name: formData.name,
         email: formData.email,
         createdAt: new Date().toISOString(),
      };

      signup(userData);
      navigate("/profile"); // Redirect ke profile setelah signup
   };

   return (
      <div className="auth-container">
         <div className="auth-card">
            <h2>Create Account</h2>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Full Name</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Enter your full name"
                     required
                  />
               </div>

               <div className="form-group">
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Enter your email"
                     required
                  />
               </div>

               <div className="form-group">
                  <label>Password</label>
                  <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder="Create a password"
                     required
                  />
               </div>

               <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                     type="password"
                     name="confirmPassword"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                     placeholder="Confirm your password"
                     required
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  Sign Up
               </button>
            </form>

            <p className="auth-link">
               Already have an account? <Link to="/login">Login</Link>
            </p>
         </div>
      </div>
   );
};

export default SignupPage;
