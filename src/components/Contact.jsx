import React from "react";

const Contact = () => {
  return (
    <div className="w-full text-white bg-slate-950" id="contact">
      <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl ">
        <p className="text-lg md:text-4xl font-bold text-[#cfe0f4] text-center mb-10">Let’s Build Something Amazing Together</p>
        <p className="text-slate-300 text-[20px] text-center max-w-4xl mx-auto">
          Ready to take your business to the next level? We’d love to hear from you. Whether you have a project in mind or just want to explore your options,
          our team is here to help.
        </p>

        <div className="w-full flex md:justify-center items-center pt-10">
          <div className="w-full md:w-fit p-6  flex flex-col md:flex-row  md:justify-center items-center gap-8">
            <button className="w-full md:w-fit flex justify-center items-center gap-3 px-8 md:px-10 py-3.5  border border-slate-300 rounded-full text-white md:font-medium  text-sm md:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#b1b3b6" fill="none">
                  <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              Schedule a Call
            </button>
            <a
              href="emailt0"
              className="w-full md:w-fit flex justify-center items-center gap-3 px-8 md:px-10 py-3.5  bg-yellow-500 rounded-full text-white md:font-medium  text-sm md:text-lg"
            >
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                  <path
                    d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Send Message
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className=" flex justify-center items-center gap-8">
            <p className="text-slate-500 text-center">To make the most of our meeting, we’ll send over a few questions in advance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
