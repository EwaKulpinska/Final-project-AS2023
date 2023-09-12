import { motion } from "framer-motion";
import Newsletter from "../components/newsletter/Newsletter";

export default function About() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
      <h3 className="header">
        Introducing Foodlum – Your Passport to Culinary Passion and Adventure!
      </h3>
      <p className="info about-text">
        🍽️ At Foodlum, we're not just a recipe search website; we're your
        gateway to a world of gastronomic delight and adventure. Our mission is
        simple yet profound: to ignite your passion for food and turn every meal
        into an extraordinary journey.
      </p>
      <p className="about-text">
        🔍 Searching for the perfect recipe? Look no further. Foodlum boasts an
        extensive collection of recipes from around the globe, from comforting
        classics to bold, exotic creations. Our easy-to-navigate platform
        ensures you find exactly what you're looking for, whether it's a quick
        weekday dinner or an elaborate weekend feast.
      </p>
      <p className="about-text">
        📱 And because we know that the modern kitchen is a digital one, Foodlum
        is accessible on any device. Browse recipes on your smartphone, tablet,
        or desktop - we're here to fuel your foodie adventures whenever and
        wherever you are.
      </p>
      <p className="about-text">
        ✨ So, are you ready to turn every meal into an adventure? Welcome to
        Foodlum - where food is a passion and adventure is on the menu! 🍴
      </p>
      <Newsletter />
    </motion.div>
  );
}
