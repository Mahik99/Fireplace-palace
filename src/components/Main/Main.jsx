import HeroSection from "../Hero/HeroSection/HeroSection";
import Separator from "../Separator/Separator";
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection";
import { Reviews } from "../reviews/reviews";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <Reviews /> 
      <Separator />
      <HowItWorksSection />
    </main>
  );
};

export default Main;
