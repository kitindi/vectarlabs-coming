import React from "react";
import aboutImage from "../assets/about-image.jpg";
import aboutImage1 from "../assets/about_1.jpg";
import aboutImage2 from "../assets/about_2.jpg";

const About = () => {
  return (
    <div className="w-full text-white bg-slate-950 py-8">
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
          <p className="text-2xl font-semibold py-6">Reasons you will love to work with us</p>
          <div className="flex flex-wrap gap-7">
            <div>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#facc15" fill="none">
                  <path
                    d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path d="M12 1.99921V2.99921" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 11.9992H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 11.9992H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.0704 4.92792L18.3633 5.63503" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.6368 5.636L4.92969 4.92889" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className="text-slate-400 mt-3">Expertise & innovations</p>
            </div>
            <div>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#facc15" fill="none">
                  <path d="M12 8V12L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M19.5454 16.4534C21.1818 17.337 22 17.7789 22 18.5C22 19.2211 21.1818 19.663 19.5454 20.5466L18.4311 21.1484C17.1744 21.827 16.5461 22.1663 16.2439 21.9196C15.504 21.3154 16.6567 19.7561 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.6567 17.2439 15.504 15.6846 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
              <p className="text-slate-400 mt-3">Timely delivery</p>
            </div>
            <div>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#facc15" fill="none">
                  <path
                    d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
              <p className="text-slate-400 mt-3">Client centric approach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
