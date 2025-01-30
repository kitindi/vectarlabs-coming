import React from "react";
import aboutImage from "../assets/about-image.jpg";
import aboutImage1 from "../assets/about_1.jpg";
import aboutImage2 from "../assets/about_2.jpg";

const About = () => {
  return (
    <div className="w-full text-white bg-black py-8">
      <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-6xl ">
        <div className="flex flex-wrap items-center gap-4 md:gap-0 justify-between w-full py-16">
          <div className="flex flex-col items-center md:justify-start">
            <p className="text-4xl md:text-5xl font-bold mb-3">
              100<span className="">+</span>
            </p>
            <p className="text-md text-slate-200">Happy Customer</p>
          </div>
          <div className="flex flex-col items-center md:justify-start">
            <p className="text-4xl md:text-5xl font-bold mb-3">
              200<span className="">+</span>
            </p>
            <p className="text-md text-slate-200">Completed Projects</p>
          </div>
          <div className="flex flex-col items-center md:justify-start">
            <p className="text-4xl md:text-5xl font-bold mb-3">
              99<span className="font-bold">%</span>
            </p>
            <p className="text-md text-slate-200">Client Satisfaction</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-4xl md:text-5xl font-bold mb-3">24x7</p>
            <p className="text-md text-slate-200">Client Support</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl flex flex-col md:flex-row gap-5 py-8">
        <h2 className="text-xl font-bold">
          {" "}
          <span className="text-yellow-400">#</span> Who We Are
        </h2>
      </div>
      <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl flex  flex-col md:flex-row gap-5">
        <div className="flex-1 ">
          <img src={aboutImage2} alt="" className="object-contain rounded-md" />
        </div>
        <div className="flex-1 md:pl-20">
          <p className="text-3xl font-semibold mb-4">Your Partner in Digital Transformation</p>
          <p className="text-md text-slate-300 leading-normal font-medium py-2">
            We are a team of passionate web and software developers dedicated to creating tailor-made solutions that solve real business challenges. With years
            of experience across industries, we combine creativity, technology, and strategy to deliver results that matter.
          </p>
          <p></p>
          <p className="text-2xl font-semibold py-6">Reasons you will love us</p>
          <div className="flex flex-wrap">
            <div>
              <p>Icon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
