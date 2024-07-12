import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={isSidebarOpen ? "sidebar dropdown-open" : "sidebar"}>
      <div className="sidebar-header">
        <img src="/logo.png" alt="App Logo" />
        <h3>App Name</h3>
        <button onClick={toggleSidebar} className="sidebar-toggle">
        <i className="fas fa-bars"></i>
      </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profilo">Profilo</Link>
          </li>
          <li>
            <Link to="/Impostazioni">Impostazioni</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
