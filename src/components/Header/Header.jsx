import React from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "../../assets/Hamburger.png";
import todoListLogo from "../../assets/todo-list-logo-img.png";
import CheckListLogo from "../../assets/CheckList logo.png";
import ImmagineProfilo from "../../assets/immagine profilo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo__container__hamburger">
            <img src={Hamburger} alt="Hamburger" />
          </div>
          <div className="logo__wrapper">
            <div className="logo__container__todoListLogo">
              <img src={todoListLogo} alt="todoListLogo" />
            </div>
            <div
              className="logo__container__CheckListLogo" /* onClick={handleToggle} */
            >
              <img src={CheckListLogo} alt="CheckListLogo" />
              {/* {isOpen && (
                <div className="dropdown-menu__header">
                <button className="dropdown-item__header" onClick={logOut}>
                Esci
                </button>
                </div>
                )} */}
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
