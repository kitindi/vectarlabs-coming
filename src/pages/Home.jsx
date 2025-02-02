import About from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VectarLabs | Leading Web, Mobile & Software Development Company</title>
        <meta
          name="description"
          content="VectarLabs is a top web and software development company in East Africa, offering UX/UI design, custom web development, e-commerce solutions, software development, maintenance & support, and digital marketing services. Partner with us for innovative digital solutions."
        />
        <meta
          name="keywords"
          content="web development East Africa, software development Kenya, UX/UI design Tanzania, e-commerce solutions Uganda, digital marketing Rwanda, IT support Africa, software maintenance, web design Nairobi, custom software development, digital solutions Africa"
        />
        <meta property="og:title" content="VectarLabs | Leading Web & Software Development Company" />
        <meta
          property="og:description"
          content="VectarLabs is a top web and software development company in East Africa, offering UX/UI design, custom web development, e-commerce solutions, software development, maintenance & support, and digital marketing services. Partner with us for innovative digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vectarlabs.com/" />
        <meta property="og:image" content="https://vectarlabs.com/assets/logo-BFujICqk.svg" />
        <meta property="og:site_name" content="VectarLabs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VectarLabs | Leading Web & Software Development Company" />
        <meta
          name="twitter:description"
          content="VectarLabs is a top web and software development company in East Africa, offering UX/UI design, custom web development, e-commerce solutions, software development, maintenance & support, and digital marketing services. Partner with us for innovative digital solutions."
        />
        <meta name="twitter:image" content="https://vectarlabs.com/assets/logo-BFujICqk.svg" />
        <link rel="canonical" href="https://vectarlabs.com/" />
      </Helmet>
      <div className="bg-black">
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </div>
    </>
  );
};

export default Home;
