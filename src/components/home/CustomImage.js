import { Link } from "react-router-dom";

export default function CustomImage({ imgSrc, pt, recipe }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <Link to={"/recipe/" + recipe.id}>
        <img src={imgSrc} alt="" />
      </Link>
    </div>
  );
}
