import React from "react";
import "./Sidebar.css";
import TodoList from "./TodoList";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  todos,
  toggleTodo,
  addTodo,
}) => {
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <div 
      className={isSidebarOpen ? "sidebar dropdown-open" : "sidebar"}
      style={{ position: 'fixed', zIndex: 2 }}
    >
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
        <h3 style={{ color: "black" }}>Le tue liste</h3>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default Sidebar;