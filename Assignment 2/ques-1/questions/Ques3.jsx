import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Ques3 = () => {
  const [todos, settodos] = useState([]);
  const [selectuser, setselectuser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      }).then((data) => {
        settodos(data);
      }
      ),[];
  });
  return (
  <div>
    <button onClick={()=>{setselectuser(1)}}>user 1</button>
    <button onClick={()=>{setselectuser(2)}}>user 2</button>
    <button onClick={()=>{setselectuser(3)}}>user 3</button>

    {selectuser && (
        <div>{todos.filter((todos)=>todos.userId===selectuser).map((todos)=>(
            <div key={todos.id}>{todos.id}-{todos.title}</div>
        ))}</div>
    )}

    
  </div>
  )
}


export default Ques3;
