import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";
import React from "react";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name]);

  const ingredients = details.extendedIngredients;
  console.log(ingredients);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <Search />
      <Category />
      <div className="detail-wrapper">
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
          <BackButton />
        </div>
        <div className="recipe-info">
          <button
            className={
              activeTab === "instructions"
                ? "recipe-button active"
                : "recipe-button"
            }
            onClick={() => setActiveTab("instructions")}>
            Instructions
          </button>
          <button
            className={
              activeTab === "ingredients"
                ? "recipe-button active"
                : "recipe-button"
            }
            onClick={() => setActiveTab("ingredients")}>
            Ingredients
          </button>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Recipe;
