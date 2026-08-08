import React, { useState } from "react";




const Badge = (props) => {
  return (
    <div>
      total = {props.total}
    </div>
  )
}




const Ques4 = () => {
  const [Task, setTask] = useState(["going to market"]);
  const [inputValue, setInputValue] = useState("");

  const Addtask = () => {
    if(inputValue.trim() != "") {
      setTask([...Task, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={Addtask}>Add</button>
      <ul>
        {Task.map((Task, index) => (
          <li key={index}>{Task}</li>
        ))}
      </ul>
      <Badge total={Task.length}/>
    </div>
  );
};

export default Ques4;
