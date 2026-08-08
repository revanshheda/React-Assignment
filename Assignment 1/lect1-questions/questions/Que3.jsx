import React, { useState } from 'react'

const Display = ({count}) => {
  return (
    <div>
      {count}
    </div>
  )
}


const Controls = ({onincrese,ondecrese}) => {
  return (
    <div>
      <button onClick={onincrese}>Increse</button>
      <button onClick={ondecrese}>Decrese</button>
    </div>
  )
}




const que3 = () => {
  const [count, setCount] = useState(0)
  const increse = () => {setCount(count+1)}
  const decrese = () => {setCount(count-1)}
  return (
    
    <div>
      <Display count={count}/>
      <Controls onincrese={increse} ondecrese={decrese} />
    </div>
  )
}








export default que3


