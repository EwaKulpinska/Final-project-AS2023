import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <Search />
      <Category />
      <motion.div className="recipes-container">
        {cuisine.map((item) => {
          return (
            <motion.div
              className="recipe-card"
              key={item.id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}>
              <Link to={"/recipe/" + item.id} className="recipe-link">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Cuisine;
