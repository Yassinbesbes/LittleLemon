import NavigationsBar from "../components/Nav";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import RatesCard from "../components/RatesCards";
import About from "../components/About";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <NavigationsBar />
      <CallToAction />
      <Specials />
      <RatesCard />
      <About />
      <Footer/>
    </div>
  );
};

export default Homepage;
