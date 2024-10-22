import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Biryani", "Dal", "Vegetables", "Milk", "Apple"];

  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items = {foodItems} />
      <FoodItems items = {foodItems} />
    </>
  );
}

export default App;
