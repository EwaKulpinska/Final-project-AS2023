import React from "react";
import { Route, Routes } from "react-router-dom";
import RecipesMainPage from "./RecipesMainPage";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "../components/Searched";

function RecipePages() {
  return (
    <Routes>
      <Route path="/recipes" element={<RecipesMainPage />} />
      <Route path="/recipes/:type" element={<Cuisine />} />
      <Route path="/recipes/:name" element={<Recipe />} />
      <Route path="/recipes/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default RecipePages;
