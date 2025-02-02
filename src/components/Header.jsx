import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    const mobileQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
    setIsMobile(mobileQuery.matches);
  };

  // Add event listener for screen size changes
  useEffect(() => {
    checkScreenSize(); // Check on initial render
    window.addEventListener("resize", checkScreenSize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup
    };
  }, []);
  return (
    <div className="w-full overflow-hidden h-screen bg-slate-950">
      <div className="relative h-[100vh] w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex items-center">
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <div className="container mx-auto px-6 md:px-20 lg:px-20 max-w-7xl py-4 flex flex-col items-center">
            <h1 className="text-white text-3xl md:text-7xl text-center font-semibold md:font-medium mt-20">
              {" "}
              Transforming Ideas into Powerful Digital Solutions that Inspires <span className="text-yellow-400 font-semibold">Growth</span>.
            </h1>

            <p className="text-[#93a3b6] text-xl md:text-2xl mt-6 text-center md:px-36">
              We build custom web and software solutions that streamline operations, boost productivity, and drive growth for your business
            </p>
            {/* <p className="text-[#93a3b6] text-xl md:text-2xl mt-6 text-center md:px-36">
              We design and develop custom websites and software that drive growth, efficiency, and innovation for businesses like yours.
            </p> */}
            <a
              href="https://calendar.app.google/gvTnhQzbkRZ2ypWd6"
              target="_blank"
              className="px-12 py-3.5 mt-8 rounded-full bg-yellow-500 text-white md:font-medium  text-sm md:text-lg"
            >
              Get a Free Consultation
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
