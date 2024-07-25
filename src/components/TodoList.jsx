<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import TodoItem from "./TodoItem";
=======
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
>>>>>>> parent of b285d97 (css)
=======
/* import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
>>>>>>> parent of 46c8371 (css)
import "./TodoList.css";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
<<<<<<< HEAD
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
=======
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
>>>>>>> parent of 46c8371 (css)
    </ul>
  );
};

export default TodoList;
 */