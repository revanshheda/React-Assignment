import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Ques5 = () => {
  const [todos, settodos] = useState([])
  const [search, setsearch] = useState("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{return res.json()}).then((data)=>{settodos(data)},[])
  })

  
  return (
    <div>
      <h1>Search todos</h1>
      <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}}  placeholder='search todos'/>

      {todos.filter((todo)=> todo.title.toLowerCase().includes(search.toLowerCase())).map((todo) => (
       <div key={todo.id}>
        {todo.id}-{todo.title}
       </div>
      ))}
    </div>
  )
}

export default Ques5
