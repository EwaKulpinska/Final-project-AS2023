import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "../components/Searched";
import { Route, Routes } from "react-router-dom";
import RecipesMainPage from "./RecipesMainPage";
import Subscriptions from "./Subscriptions";
import About from "./About";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
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
