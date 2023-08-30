import HeroSection from "../components/home/HeroSection";
import ImproveSkills from "../components/home/ImproveSkills";
import QuoteSection from "../components/home/QuoteSection";
import Carousel from "../components/home/Carousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <Carousel />
    </div>
  );
}
