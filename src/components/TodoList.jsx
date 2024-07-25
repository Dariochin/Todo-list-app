<<<<<<< HEAD
import React from "react";
import TodoItem from "./TodoItem";
=======
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
>>>>>>> parent of b285d97 (css)
import "./TodoList.css";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
<<<<<<< HEAD
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      ) : (
        <p style={{ color: "black" }}>Nessuna lista</p>
      )}
=======
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
>>>>>>> parent of b285d97 (css)
    </ul>
  );
};

export default TodoList;
