import React, { useEffect, useState } from "react";

const Ques4 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>
            {todo.id} - {todo.title}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Ques4;