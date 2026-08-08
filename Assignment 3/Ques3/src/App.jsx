import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>Foodie</h2>

        <div className="links">
          <Link to="/">Homepage</Link>
          <Link to="/pizza">Pizza</Link>
          <Link to="/burger">Burger</Link>
          <Link to="/drinks">Drinks</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Foodie 🍕</h1>
      <p>Choose your favorite food from the menu.</p>
    </div>
  );
};

const Pizza = () => {
  return (
    <div className="page">
      <h1>🍕 Pizza</h1>
      <p>Delicious cheesy pizzas!</p>
    </div>
  );
};

const Burger = () => {
  return (
    <div className="page">
      <h1>🍔 Burger</h1>
      <p>Juicy and tasty burgers!</p>
    </div>
  );
};

const Drinks = () => {
  return (
    <div className="page">
      <h1>🥤 Drinks</h1>
      <p>Refreshing drinks for you!</p>
    </div>
  );
};

export default App;