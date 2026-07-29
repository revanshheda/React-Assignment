import React from 'react'
import StudentCard from './assets/StudentCard'

const App = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
      <StudentCard name="Aisha Khan" rollNo="101" course="Computer Science" />
      <StudentCard name="Rohan Mehta" rollNo="102" course="Electronics" />
      <StudentCard name="Priya Nair" rollNo="103" course="Mechanical" />
    </div>
    </div>
  )
}

export default App
