import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full overflow-hidden h-screen bg-[#130f40]">
      <div className="relative h-[100vh] w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex items-center">
          <Navbar />
          <div className="container mx-auto px-6 md:px-20 lg:px-20 max-w-7xl py-4 flex flex-col items-center">
            <h1 className="text-white text-3xl md:text-7xl text-center font-medium mt-16">
              {" "}
              Transforming Ideas into Powerful Digital Solutions that Inspires <span className="text-[#ffec78] font-semibold">Growth</span>.
            </h1>
            <p className="text-[#93a3b6] text-xl md:text-2xl mt-6 text-center md:px-36">
              We design and develop custom websites and software that drive growth, efficiency, and innovation for businesses like yours.
            </p>
            <button className="px-12 py-3 mt-5 rounded-full bg-[#ffec78] text-white md:font-medium text-lg">Book a Call Now</button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
