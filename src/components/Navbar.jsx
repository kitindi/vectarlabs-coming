import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 lg:px-32 max-w-8xl py-4">
        <div className="flex items-center space-x-32">
          <a href="/">
            <img src={logo} alt="" className="w-40  md:w-40 h-12" />
          </a>
          <nav className="hidden  pt-3 md:flex items-center justify-center space-x-12">
            <a href="#about" className="text-white font-bold">
              {" "}
              Company
            </a>
            <a href="#services" className="text-white font-bold">
              {" "}
              Services
            </a>
            <a href="#testimonials" className="text-white font-bold">
              {" "}
              Testimonials
            </a>
            <a href="#blog" className="text-white font-bold">
              {" "}
              FAQ
            </a>
            <a href="#contact" className="text-white font-bold">
              {" "}
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
