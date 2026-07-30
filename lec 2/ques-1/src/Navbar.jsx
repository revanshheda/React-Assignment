import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/Ques1">Ques 1</Link>
      <Link to="/Ques2">Ques 2</Link>
    </div>
  );
};

export default Navbar;