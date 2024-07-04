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
      {/* <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        xmlns="todo.list.app/svg"
      >
        <circle cx="150" cy="100" r="50" fill="red" />
        <rect x="100" y="50" width="100" height="50" fill="blue" />
        <line
          x1="50"
          y1="150"
          x2="250"
          y2="150"
          stroke="green"
          stroke-width="5"
        />
      </svg> */}

      <h1>CheckList</h1>
      <p>aggiungi un'azione da compiere</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
