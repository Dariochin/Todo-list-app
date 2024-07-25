import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Hamburger from "../assets/Hamburger.png";
import TodoListLogo from "../assets/todo-list-logo-img.png";
import CheckListLogo from "../assets/CheckList logo.png";
>>>>>>> parent of 46c8371 (css)
=======
import Hamburger from "../assets/Hamburger.png";
import TodoListLogo from "../assets/todo-list-logo-img.png";
import CheckListLogo from "../assets/CheckList logo.png";
>>>>>>> parent of 46c8371 (css)

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

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="sidebar-list-container">
<<<<<<< HEAD
        <h3 style={{ color: "black" }}>Le tue liste</h3>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
=======
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
>>>>>>> parent of b285d97 (css)
      </div>
=======
=======
>>>>>>> parent of 46c8371 (css)
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
<<<<<<< HEAD
>>>>>>> parent of 46c8371 (css)
=======
>>>>>>> parent of 46c8371 (css)
    </div>
  );
};

export default Sidebar;
