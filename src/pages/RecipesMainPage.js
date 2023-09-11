import { useState, useEffect } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RecipesMainPage() {
  const [startingRecipes, setStartingRecipes] = useState([]);

  useEffect(() => {
    getStartingRecipes();
  }, []);

  const getStartingRecipes = async () => {
    const check = localStorage.getItem("startingRecipes");
    if (check) {
      setStartingRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );
      const data = await api.json();

      localStorage.setItem("startingRecipes", JSON.stringify(data.recipes));
      setStartingRecipes(data.recipes);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <Search />
      <Category />
      <motion.div className="recipes-container">
        {startingRecipes.map((item) => {
          return (
            <motion.div className="recipe-card" key={item.id}>
              <Link to={"/recipe/" + item.id} className="recipe-link">
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
