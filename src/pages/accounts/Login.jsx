// pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { login } = useAuth();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      // Simulasi API call - ganti dengan API sebenarnya
      if (email && password) {
         const userData = {
            id: "1",
            email,
            name: email.split("@")[0],
            createdAt: new Date().toISOString(),
         };

         login(userData);
         navigate("/profile"); // Redirect ke profile setelah login
      } else {
         setError("Please fill in all fields");
      }
   };

   return (
      <div className="auth-container">
         <div className="auth-card">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Email</label>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter your email"
                     required
                  />
               </div>

               <div className="form-group">
                  <label>Password</label>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Enter your password"
                     required
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  Login
               </button>
            </form>

            <p className="auth-link">
               Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
         </div>
      </div>
   );
};

export default LoginPage;
