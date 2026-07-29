import React from 'react'

const StudentCard = (props) => {
  return (
    <div style={{padding:20}}>
      <h3>{props.name}</h3>
      <p>roll no : {props.rollNo}</p>
      <p>course : {props.course}</p>
    </div>
  )
}

export default StudentCard
