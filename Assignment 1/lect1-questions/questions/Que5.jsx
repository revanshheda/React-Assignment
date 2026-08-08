import React, { useState } from 'react'



const Displaylikes = (props) => {
  return (
    <div>
      {props.like}
    </div>
  )
}




const Que5 = () => {
    const [likescount, setlikescount] = useState(0)

    const handlelikes = () => {
       setlikescount(likescount+1)
    }

  return (

    <div>
      <Displaylikes like={likescount}/>
      <button onClick={handlelikes}>inc likes</button>
    </div>
  )
}

export default Que5
