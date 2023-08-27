import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="Chef foto" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
          voluptatum.
        </p>
        <a className="view-button" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
}
