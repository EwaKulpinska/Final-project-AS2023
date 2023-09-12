import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "../components/Searched";
import { Route, Routes } from "react-router-dom";
import RecipesMainPage from "./RecipesMainPage";
import MealPlans from "./MealPlans";
import About from "./About";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mealplan" element={<MealPlans />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipes/searched/:search" element={<Searched />} />
        <Route path="/recipes" element={<RecipesMainPage />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
