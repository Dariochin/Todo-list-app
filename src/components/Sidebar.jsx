import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <div className={isSidebarOpen ? "sidebar dropdown-open" : "sidebar"}>
      <div className="sidebar-header">
        <div className="logo__container__Close" onClick={handleToggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      </div>

      <div className="sidebar-list-container">
        <h3>Le tue liste</h3>
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
    </div>
  );
};

export default Sidebar;
