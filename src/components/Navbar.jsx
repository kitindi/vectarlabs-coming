import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 lg:px-32 max-w-8xl py-4">
        <div className="flex items-center space-x-32">
          <Link to="/">
            <img src={logo} alt="" className="w-40  md:w-40 h-12" />
          </Link>
          <nav className="hidden  pt-3 md:flex items-center justify-center space-x-12">
            <Link to="" className="text-white font-bold">
              {" "}
              Company
            </Link>
            <Link to="#services" className="text-white font-bold">
              {" "}
              Services
            </Link>
            <Link to="#work" className="text-white font-bold">
              {" "}
              Work
            </Link>
            <Link to="#blog" className="text-white font-bold">
              {" "}
              Blog
            </Link>
            <Link to="#contact" className="text-white font-bold">
              {" "}
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
