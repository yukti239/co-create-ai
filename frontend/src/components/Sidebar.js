import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">

      <h2 className="logo">CoCreate AI</h2>

      <nav>

        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/workflows" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Workflows
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Profile
        </NavLink>

      </nav>

      {/* 🔥 Logout Button */}
      <button
        onClick={onLogout}
        className="logout-btn"
        style={{ marginTop: "30px", width: "100%" }}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;