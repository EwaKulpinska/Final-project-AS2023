import CustomImage from "./CustomImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [random, setRandom] = useState([]);
  const navigate = useNavigate();

  const exploreClickHandler = () => {
    navigate("/recipes/");
  };

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const check = localStorage.getItem("random");
    if (check) {
      setRandom(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandom(data.recipes);
    }
  };

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Foodlum! is a place where you can please your soul and tummy with
          delicious food recipies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button onClick={exploreClickHandler} className="btn">
          explore now
        </button>
      </div>
      <div className="col gallery">
        {random.map((recipe) => (
          <CustomImage
            recipe={recipe}
            key={recipe.id}
            imgSrc={recipe.image}
            pt={"90%"}
          />
        ))}
      </div>
    </div>
  );
}
