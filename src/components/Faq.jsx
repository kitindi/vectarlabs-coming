import { useState } from "react";

const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState(null);
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "How do you work  with your clients to ensure meeting their expectations ?",
      answer:
        "First of all we believe in transparency and collaboration. When working with you to ensure we bring your vision to life, We start by understanding your goals, challenges, and requirements. Then our team creates a detailed roadmap acompanied with regular updates, feedback sessions to ensure your project stays on track. Later we craft stunning designs and build robust solutions tailored to your desired goals. To ensure a high quality end product, we rigorously test every detail before delivering a polished product. Then our relationship will make sure we are there to help you grow with ongoing maintenance and updates.",
    },
    {
      id: 2,
      question: "What industries do you specialize in ?",
      answer:
        "We specialize in working with businesses in healthcare, e-commerce, and finance, where we’ve delivered tailored web and software solutions that drive efficiency, compliance, and growth. That said, we’ve also successfully completed projects for clients in education, real estate, and logistics, so we’re comfortable adapting to the unique needs of any industry",
    },
    {
      id: 3,
      question: "How much does a custom website, app or software cost and how long does a typical project take?",
      answer:
        " These are great questions! The cost and timeline for a custom website, app or software can vary significantly depending on the scope features, and complexity of the project. Typically, custom websites can range from 500,000 Tsh to 2000,000 Tsh, and the timeline can range from 4 to 12 weeks or more. Factors like design complexity, functionality, content creation, revisions, and integrations all play a role in determining the final cost and timeline. To ensure clarity and efficiency, we follow a structured process that includes discovery, planning, design and development, and testing. This helps us deliver high-quality results on time and within budget.To give you a more accurate estimate, we’d love to learn more about your project. Let’s schedule a free consultation to discuss your goals, and we can provide a detailed quote and timeline tailored to your needs.",
    },
  ];

  // Function to toggle the visibility of the answer
  const toggleAnswer = (id) => {
    setOpenAnswer((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full text-white bg-slate-950  py-32" id="faq">
      <div className="container mx-auto px-8 md:px-20 lg:px-20 md:max-w-7xl ">
        <h2 className="text-xl font-bold mb-16">
          {" "}
          <span className="text-yellow-400 mr-4">#</span> Frequently Asked Questions
        </h2>
        <h2 className="text-2xl md:text-4xl font-semibold  text-[#cfe0f4] md:text-center">
          Got questions? We’ve got answers. Here are some of the most common questions we receive from clients.
        </h2>
        <div>
          <div className="my-10 md:my-16 text-xl md:text-2xl font-extralight text-slate-300 px-4 py-8 rounded-lg">
            {faqData.map((item) => (
              <div className="mb-3" key={item.id}>
                <p className=" text-[22px]  flex justify-between items-center pb-5 border-b border-slate-900">
                  <span>{item.question}</span>{" "}
                  <div className="flex items-center">
                    {openAnswer === item.id ? (
                      <span className="cursor-pointer" onClick={() => toggleAnswer(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#facc15" fill="none">
                          <path d="M2.5 12L21.5002 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    ) : (
                      <span className="cursor-pointer" onClick={() => toggleAnswer(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#facc15" fill="none">
                          <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                </p>
                {openAnswer === item.id && <p className="text-[18px] text-bold py-8 ">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
