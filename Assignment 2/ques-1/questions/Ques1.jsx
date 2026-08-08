import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Ques1 = () => {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => settodos(data));
  }, []);
  const completedTodos = todos.filter((todo) => todo.completed === true);
  return (
    <div>
      <h1>completed todos</h1>
      <ul>
        {completedTodos.map((todo)=>(
          <li key={todo.id}>
            {todo.id}-{todo.title}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Ques1
