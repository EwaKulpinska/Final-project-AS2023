import CustomImage from "./CustomImage";
import { dishImages } from "../img/images";

export default function HeroSection() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recipies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">explore now</button>
      </div>
      <div className="col gallery">
        {dishImages.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}