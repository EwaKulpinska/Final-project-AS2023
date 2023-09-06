import { useState, useEffect } from "react";
import Category from "../components/Category";
import Search from "../components/Search";
import RecipePages from "./RecipePages";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
      <Grid>
        {startingRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
      <RecipePages />
    </motion.div>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
