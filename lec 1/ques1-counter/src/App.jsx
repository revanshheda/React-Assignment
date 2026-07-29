import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button disabled={count==10} onClick={()=>{setcount(count+1)}}>increse</button>
      <button onClick={()=>{setcount(0)}}>reset</button>
      <button disabled={count==0} onClick={()=>{setcount(count-1)}}>decrease</button>

    </div>
  )
}

export default App