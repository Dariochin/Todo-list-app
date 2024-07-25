import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MyParentComponent = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <Sidebar todos={todos} toggleTodo={toggleTodo} addTodo={addTodo} />
    </div>
  );
};

export default MyParentComponent;