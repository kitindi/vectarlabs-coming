import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 lg:px-32 max-w-8xl py-4 relative">
        <div className="flex items-center justify-between md:justify-normal space-x-32">
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
            <a href="#faq" className="text-white font-bold">
              {" "}
              FAQ
            </a>
            <a href="#contact" className="text-white font-bold">
              {" "}
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
              <path d="M20 12L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 5L4 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 19L4 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
