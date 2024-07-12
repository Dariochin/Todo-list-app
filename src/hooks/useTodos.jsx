/* import { useState } from 'react';

const useTodos = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    toggleTodo
  };
};

export default useTodos;
 */