import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <Search />
      <Category />
      <div className="recipes-container">
        {searchedRecipes.map((item) => {
          return (
            <motion.div
              className="recipe-card"
              key={item.id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}>
              <Link to={"/recipe/" + item.id} className="recipe-link">
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Searched;
