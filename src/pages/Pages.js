import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "../components/Searched";
import { Route, Routes } from "react-router-dom";
import RecipesMainPage from "./RecipesMainPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipes/searched/:search" element={<Searched />} />
      <Route path="/recipes" element={<RecipesMainPage />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
