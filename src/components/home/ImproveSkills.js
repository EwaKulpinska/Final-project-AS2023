import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ImproveSkills() {
  const [headerDish, setHeaderDish] = useState([]);
  const navigate = useNavigate();

  const signupClickHandler = () => {
    navigate("/about");
  };

  useEffect(() => {
    getHeaderImage();
  }, []);

  const getHeaderImage = async () => {
    const check = localStorage.getItem("headerDish");
    if (check) {
      setHeaderDish(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`
      );
      const data = await api.json();

      localStorage.setItem("headerDish", JSON.stringify(data.recipes));
      setHeaderDish(data.recipes);
    }
  };

  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own resipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        {headerDish.map((dish) => (
          <img src={dish.image} alt="Sushi" />
        ))}
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn" onClick={signupClickHandler}>
          signup now
        </button>
      </div>
    </div>
  );
}
