import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCompass,
  faUsers,
  faCogs,
  faServer,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar";
import cx from "classnames";

const menuItems = [
  { title: "Dashboard", icon: faCompass },
  { title: "Users", icon: faUsers },
  { title: "Cloud services", icon: faCloud },
  { title: "Usage data", icon: faCogs },
  { title: "Server list", icon: faServer },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initial state: sidebar closed

  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className="sidebar__button" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="sidebar__content">
        <Searchbar />
        <ul>
          {menuItems.map((item) => (
            <li key={item.title}>
              <div className={"sidebar__listItem"}>
                <FontAwesomeIcon className={"sidebar__icon"} icon={item.icon} />
                <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={"fade"}
                  unmountOnExit
                >
                  <span>{item.title}</span>
                </CSSTransition>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
