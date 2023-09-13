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
        <NavLink to={"/recipes/cuisine/Greek"} className="category-link">
          <h4>Greek</h4>
        </NavLink>
        <NavLink to={"/recipes/cuisine/Mexican"} className="category-link">
          <h4>Mexican</h4>
        </NavLink>
      </div>
    </>
  );
}

export default Category;
