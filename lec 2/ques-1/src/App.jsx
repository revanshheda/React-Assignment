import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Ques1 from "../questions/Ques1";
import Ques2 from "../questions/Ques2"


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/ques1" element={<Ques1 />} />
        <Route path="/ques2" element={<Ques2/>} />
        
      </Routes>
    </div>
  );
};

export default App;