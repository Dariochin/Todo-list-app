import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TodoListLogo from "../assets/todo-list-logo-img.png";
import CheckListLogo from "../assets/CheckList logo.png";
import ImmagineProfilo from "../assets/immagine profilo.png";
import "./Header.css";
import Sidebar from "./Sidebar"; // Import your Sidebar component

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo__container__Hamburger" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </div>
          <div className="logo__wrapper">
            <div className="logo__container__TodoListLogo">
              <img src={TodoListLogo} alt="TodoListLogo" />
            </div>
            <div className="logo__container__CheckListLogo">
              <img src={CheckListLogo} alt="CheckListLogo" />
            </div>
          </div>
          <div className="logo__container__ImmagineProfilo">
            <img src={ImmagineProfilo} alt="ImmagineProfilo" />
          </div>
        </nav>
      </header>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} {/* Pass state and toggle function to Sidebar */}
      <Outlet />
    </>
  );
};

export default Header;
