import React from "react";
import { useAuth } from "../context/AuthContext";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Building_Mode from "./BuildingMode";

export default function Profile() {
   return (
      <>
         <Building_Mode />

         {/* Profile Auth */}
         {/* <div className="profile-container">
            <div className="profile-header">
               <h1>Profile Page</h1>
               <p>Welcome back, {user?.name}!</p>
            </div>

            <div className="profile-content">
               <div className="profile-info">
                  <div className="profile-avatar">
                     {user?.profilePicture ? (
                        <img src={user.profilePicture} alt="Profile" />
                     ) : (
                        <div className="avatar-placeholder">
                           {user?.name?.charAt(0).toUpperCase()}
                        </div>
                     )}
                  </div>

                  <div className="profile-details">
                     <h2>{user?.name}</h2>
                     <p>Email: {user?.email}</p>
                     <p>
                        Member since:{" "}
                        {new Date(user?.createdAt).toLocaleDateString()}
                     </p>
                  </div>
               </div>

               <div className="profile-actions">
                  <button className="btn btn-primary">Edit Profile</button>
                  <button className="btn btn-secondary">Change Password</button>
               </div>
            </div>
         </div> */}
      </>
   );
}
