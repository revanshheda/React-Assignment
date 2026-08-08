import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Ques1 from "../questions/Ques1";
import Ques2 from "../questions/Ques2"
import Ques3 from "../questions/Ques3";
import Ques4 from "../questions/Ques4";
import Ques5 from "../questions/Ques5";


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/ques1" element={<Ques1 />} />
        <Route path="/ques2" element={<Ques2/>} />
        <Route path="/ques3" element={<Ques3/>} />
        <Route path="/ques4" element={<Ques4/>} />
        <Route path="/ques5" element={<Ques5/>} />
        
      </Routes>
    </div>
  );
};

export default App;