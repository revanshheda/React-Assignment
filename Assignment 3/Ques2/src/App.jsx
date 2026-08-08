import React from 'react'
import {Routes,Route,Link} from "react-router-dom"

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">HomePage</Link>
        <br />
        <Link to="/project">my projects</Link>
        <br />
        <Link to="/Resume">My resume</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/Resume' element={<Resume/>}></Route>
      </Routes>
    </div>
  )
}

export default App



const Home = () => {
  return (
    <div>
      So hi guys My name is revansh and this is my homepage
    </div>
  )
}


const Projects = () => {
  return (
    <div>
      this are my projects ,i have done so much work in my projects 
    </div>
  )
}


const Resume = () => {
  return (
    <div>
      So this is my resume ,here you can see my achivements
    </div>
  )
}


