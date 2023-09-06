import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import Category from "../components/Category";
import React from "react";
import { motion } from "framer-motion";

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
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log([details]);
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
      <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}>
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}>
            Ingredients
          </Button>
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
        </Info>
      </DetailWrapper>
    </motion.div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #34495e, var(--primary-color));
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  img {
    width: 23rem;
    border-radius: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2.5rem;
`;

export default Recipe;
