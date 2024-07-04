import React, { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
/* import "../assets/images/todo-list-logo.png"; */

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="TodoListContainer">
      <img
        src="assets/todo-list-logo.svg"
        alt="Logo della lista di cose da fare"
        width="200"
        height="100"
        className="todo-list-logo"
      />

      <h1>CheckList</h1>
      <p>aggiungi un'azione da compiere</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
