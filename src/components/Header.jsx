import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full overflow-hidden h-screen bg-[#130f40]">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <Navbar />
          <div className="container mx-auto px-8 md:px-20 lg:px-32 max-w-7xl py-4 mt-44 md:mt-56">
            <h4 className="text-[#ffec78] text-xl mb-4">We are cooking our website, coming back soon</h4>
            <h1 className="text-white text-5xl md:text-7xl">
              Building innovations to Inspire <span className="text-[#ffec78] font-semibold">Growth</span>, tailored to your goals.
            </h1>
            <p className="text-[#93a3b6] text-md mt-8">In the mean time, follow us on social media to stay updated.</p>
            <div>
              <p className="text-[#93a3b6] text-sm mt-4">
                {" "}
                <span>Call: </span>+255 675101409 / +255 757721815
              </p>
              <p className="mt-4 flex space-x-4">
                <span>
                  <a href="https://x.com/vectarlabs" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#93a3b6" fill="none">
                      <path
                        d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/vectarlab/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#93a3b6" fill="none">
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
