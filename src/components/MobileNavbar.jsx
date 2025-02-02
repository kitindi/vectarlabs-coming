import { useState } from "react";
import logo from "../assets/logo.svg";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="container mx-auto  w-full py-4 relative">
        <div className="flex items-center justify-between md:justify-normal space-x-32 px-4">
          <a href="/">
            <img src={logo} alt="" className="w-40  md:w-40 h-12" />
          </a>

          <button className="md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
              <path d="M20 12L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 5L4 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 19L4 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <nav className=" w-full bg-slate-950 h-screen  px-8 flex flex-col items-center py-24 gap-8">
            <a href="#about" className="text-white font-bold text-[20px]" onClick={toggleMenu}>
              {" "}
              Company
            </a>
            <a href="#services" className="text-white font-bold text-[20px]" onClick={toggleMenu}>
              {" "}
              Services
            </a>
            <a href="#testimonials" className="text-white font-bold text-[20px]" onClick={toggleMenu}>
              {" "}
              Testimonials
            </a>
            <a href="#faq" className="text-white font-bold text-[20px]" onClick={toggleMenu}>
              {" "}
              FAQ
            </a>
            <a href="#contact" className="text-white font-bold text-[20px]" onClick={toggleMenu}>
              {" "}
              Contact
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
