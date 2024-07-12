import React from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "../assets/Hamburger.png";
import TodoListLogo from "../assets/todo-list-logo-img.png";
import CheckListLogo from "../assets/CheckList logo.png";
import ImmagineProfilo from "../assets/immagine profilo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo__container__Hamburger">
            <img src={Hamburger} alt="Hamburger" />
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
      <Outlet />
    </>
  );
};

export default Header;
