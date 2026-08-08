import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/Ques1">Ques 1</Link>
      <Link to="/Ques2">Ques 2</Link>
      <Link to="/Ques3">Ques3</Link>
      <Link to="/Ques4">Ques4</Link>
      <Link to="/Ques5">Ques5</Link>
    </div>
  );
};

export default Navbar;