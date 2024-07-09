import React, { useState } from "react";
/* import TodoList from "../components/TodoList/TodoList"; */
/* import TodoForm from "../components/TodoForm/TodoForm"; */
/* import useTodos from '../hooks/useTodos'; */
/* import Header from "../components/Header/Header"; */
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css';

const App = () => {
  /* const { todos, addTodo, toggleTodo } = useTodos([
  ]); */

  return (
    <>
      <div className="App">
      <Sidebar />
      <Content />
    </div>
    </>
  );
};

export default App;

