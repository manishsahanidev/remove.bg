import Header from "../components/Header";
import { HowToSteps } from "../components/HowToSteps";
import Pricing from "../components/Pricing";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import TryNow from "../components/TryNow";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">   
      {/* Hero Section */}
      <Header />

      {/* Steps Section */}
      <HowToSteps/>

      {/* Slider Section */}
      <Slider/>

      {/* Pricing Section */}
      <Pricing/>

      {/* Testimonials Section */}
      <Testimonial/>

      {/* TryNow Section */}
      <TryNow/>
    </div>
  );
}

export default Home