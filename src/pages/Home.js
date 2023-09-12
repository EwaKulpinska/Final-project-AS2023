import HeroSection from "../components/home/HeroSection";
import ImproveSkills from "../components/home/ImproveSkills";
import QuoteSection from "../components/home/QuoteSection";
import Carousel from "../components/home/Carousel";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <Carousel />
    </motion.div>
  );
}
