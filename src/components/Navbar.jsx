import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 lg:px-32 max-w-7xl py-4">
        <div className="flex items-center space-x-32">
          <a href="">
            <img src={logo} alt="" className="w-48  md:w-40 h-12" />
          </a>
          <nav className="hidden md:block pt-3">
            <ul className=" flex items-center justify-center space-x-12">
              <li>
                <a href="" className="text-[#fef8fd] text-md">
                  Company
                </a>
              </li>
              <li>
                <a href="" className="text-[#fef8fd] text-md">
                  Work
                </a>
              </li>
              <li>
                <a href="" className="text-[#fef8fd] text-md">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="text-[#fef8fd] text-md">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
