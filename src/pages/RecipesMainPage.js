import Category from "../components/Category";
import Search from "../components/Search";
import RecipePages from "./RecipePages";

export default function RecipesMainPage() {
  return (
    <div>
      <Search />
      <Category />
      <RecipePages />
    </div>
  );
}
