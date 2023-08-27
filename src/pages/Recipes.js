import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import { dishImages, chefImages, img10 } from "../img/images";

export default function Recipes() {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: dishImages[0],
      authorImg: chefImages[0],
    },
    {
      title: "Spaghetti and Meatballs",
      image: dishImages[3],
      authorImg: chefImages[1],
    },
    {
      title: "American Cheese Burger",
      image: dishImages[4],
      authorImg: chefImages[2],
    },
    {
      title: "Mutton Biriyani",
      image: dishImages[5],
      authorImg: chefImages[4],
    },
    {
      title: "Japanese Sushi",
      image: img10,
      authorImg: chefImages[5],
    },
    {
      title: "Chicken Pan Pizza",
      image: dishImages[0],
      authorImg: chefImages[0],
    },
    {
      title: "Spaghetti and Meatballs",
      image: dishImages[3],
      authorImg: chefImages[1],
    },
    {
      title: "American Cheese Burger",
      image: dishImages[4],
      authorImg: chefImages[2],
    },
    {
      title: "Mutton Biriyani",
      image: dishImages[5],
      authorImg: chefImages[4],
    },
    {
      title: "Japanese Sushi",
      image: img10,
      authorImg: chefImages[5],
    },
    {
      title: "American Cheese Burger",
      image: dishImages[4],
      authorImg: chefImages[2],
    },
    {
      title: "Mutton Biriyani",
      image: dishImages[5],
      authorImg: chefImages[4],
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
