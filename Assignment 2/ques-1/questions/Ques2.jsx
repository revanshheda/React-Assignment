import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Ques2 = () => {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        settodos(data);
      }, []);
  });
  
  
  return <div>
    {todos.slice(0,10).map((todos)=>(
      <div key={todos.id}>{todos.id}-{todos.title}</div>
    ))}
  </div>;
};

export default Ques2;
