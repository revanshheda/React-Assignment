import React, { useState } from 'react'

const Que1 = () => {
    const [Count, setCount] = useState(0)
    

  return (
    <div >
        <p>{Count}</p>
      <button disabled={Count>=10} onClick={()=>{setCount(Count+1)}}>add</button>
      <button onClick={()=>{setCount(0)}}>reset</button>
      <button disabled={Count<=0} onClick={()=>{setCount(Count-1)}}>sub</button>
    </div>
  )
}

export default Que1
