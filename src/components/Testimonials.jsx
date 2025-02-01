import testImage from "../assets/testimg.jpg";

const Testimonials = () => {
  return (
    <div className="w-full text-white bg-slate-950" id="testimonials">
      <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl ">
        <h2 className="text-xl font-bold mb-10">
          {" "}
          <span className="text-yellow-400">#</span> What Our Clients Say
        </h2>

        <div className="w-full grid md:grid-cols-12">
          <div className="p-6 col-span-6 ">
            <img src={testImage} alt="testimonia image" />
          </div>
          <div className="p-6 col-span-6 md:pl-20">
            <p className="text-2xl md:text-4xl font-bold text-[#cfe0f4]">Don’t just take our word for it—hear from the businesses we’ve helped succeed.</p>
            <div className="my-10 md:my-16 text-xl md:text-2xl font-extralight text-slate-300 px-4 py-8 rounded-lg bg-slate-900">
              <p>
                {" "}
                "Working with <span className="text-yellow-500">VectarLabs</span> was a game-changer for our spare parts business. Their team delivered a custom
                software solution that streamlined our operations and saved us countless hours of stock taking and managing finance. Highly recommend!"
              </p>
              <div className="md:flex md:items-center space-x-6 mt-10">
                <p className="text-sm mt-10">
                  Ibrahim <span className="font-bold ml-4">Ismat Europe Spare Parts</span>
                </p>{" "}
                <a href="https://ismateuropespareparts.co.tz/" target="_new" className="text-sm mt-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#facc15" fill="none">
                    <path d="M9.5 14.5L14.5 9.49995" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path
                      d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <button className="w-full px-8 md:px-10 py-3.5  rounded-full bg-yellow-500 text-white md:font-medium  text-sm md:text-lg">
              Become Our Next Success Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
