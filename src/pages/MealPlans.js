import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MealList from "../components/meal-plan/MealList";

function MealPlan() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  useEffect(() => {
    getPreviousPlan();
  }, []);

  function getPreviousPlan() {
    const prevPlan = localStorage.getItem("meal-plan");
    if (prevPlan) {
      setMealData(JSON.parse(prevPlan));
    }
  }

  const getMealData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    );
    const dataDetails = await data.json();
    setMealData(dataDetails);
    localStorage.setItem("meal-plan", JSON.stringify(dataDetails));
  };

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="meal-plan">
      <section className="controls">
        <input
          className="meal-plan-calories"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData} className="get-meal-plan-btn">
          Get Daily Meal Plan
        </button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </motion.div>
  );
}

export default MealPlan;
