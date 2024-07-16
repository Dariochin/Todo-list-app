import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      ) : (
        <p style={{ color: "black" }}>Nessuna lista</p>
      )}
    </ul>
  );
};

export default TodoList;
