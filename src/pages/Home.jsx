import About from "../components/About";
import Faq from "../components/Faq";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-black">
      <About />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
