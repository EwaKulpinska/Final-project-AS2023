import ChefCard from "./ChefCard";
import { chefImages } from "../img/images";

export default function ChefsSection() {
  const chefs = [
    {
      name: "Juan Carlos",
      img: chefImages[0],
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: chefImages[1],
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: chefImages[2],
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: chefImages[3],
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: chefImages[4],
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: chefImages[5],
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];

  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
