import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Hamburger from "../assets/Hamburger.png";
import TodoListLogo from "../assets/todo-list-logo-img.png";
import CheckListLogo from "../assets/CheckList logo.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <div className={isSidebarOpen ? "sidebar dropdown-open" : "sidebar"}>
      <div className="sidebar-header">
        <div className="logo__wrapper">
          <div className="logo__container__TodoListLogo">
            <img src={TodoListLogo} alt="TodoListLogo" />
          </div>
          <div className="logo__container__CheckListLogo">
            <img src={CheckListLogo} alt="CheckListLogo" />
          </div>
        </div>
        <div
          className="logo__container__Hamburger"
          onClick={handleToggleSidebar}
        >
          <img src={Hamburger} alt="Hamburger" />
        </div>
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
