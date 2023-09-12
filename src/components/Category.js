import { NavLink } from "react-router-dom";

function Category() {
  return (
    <>
      <div className="category-list">
        <NavLink to={"/recipes/cuisine/Italian"} className="category-link">
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/recipes/cuisine/American"} className="category-link">
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/recipes/cuisine/Thai"} className="category-link">
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/recipes/cuisine/Japanese"} className="category-link">
          <h4>Japanese</h4>
        </NavLink>
      </div>
    </>
  );
}

export default Category;
