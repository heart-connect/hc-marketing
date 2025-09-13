import React, { useEffect, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const questions = [
    {
        question: "What is the purpose of Heart Connect?",
        answer: "Heart Connect is designed to bring like-minded souls together, helping you find meaningful connections and lasting love."
    },
    {
        question: "How do I create an account?",
        answer: "Download the app from the App Store or Google Play, open it, and follow the simple steps to sign up and start your journey to love."
    },
    {
        question: "Is Heart Connect free to use?",
        answer: "Yes! Our basic features are free, but we offer premium plans with exclusive perks for an enhanced dating experience."
    },
    {
        question: "How can I delete my account?",
        answer: "Go to the app’s settings, navigate to account settings, and select 'Delete Account.' Keep in mind, this action is permanent."
    },
    {
        question: "Can I upgrade my account?",
        answer: "Absolutely! Unlock premium features like unlimited messaging and advanced filters by upgrading in the subscription section."
    },
    {
        question: "Is there a mobile app?",
        answer: "Yep! Heart Connect is available on both iOS and Android. Download it now from the App Store or Google Play."
    },
    {
        question: "How do I reach customer support?",
        answer: "Need help? Contact our support team through the app by selecting 'Contact Us' or 'Support' in the settings menu."
    },
    {
        question: "What privacy settings are available?",
        answer: "We value your privacy! Control who sees your profile, adjust visibility settings, and block or report users for a safer experience."
    }
];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-center mt-6 overflow-x-hidden">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-[#c51369] text-lg tracking-wider font-semibold mb-4"
      >
        <span className="border-b-2 border-[#c51369] pb-1">Faq's</span>
      </div>

      <div className="text-[#0d0b0b] mt-6 text-2xl md:text-4xl tracking-wider font-bold">
        Love Questions, Sweet Answers
      </div>

      <div className="flex flex-col md:flex-row py-6 px-4 md:px-16">
        {/* First Column */}
        <div data-aos="zoom-in-left" className="w-full md:w-1/2 p-4">
          {questions.slice(0, 4).map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`flex tracking-wider justify-between items-center text-[#0d0b0b] w-full ${
                  activeIndex === index
                    ? "bg-[#c51369] text-white"
                    : "bg-gray-100"
                } border border-[#c51369] rounded-lg px-4 py-2 focus:outline-none`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                {activeIndex === index ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </button>
              <div
                className={`mt-2 text-start tracking-wider text-gray-600 overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                  activeIndex === index ? "max-h-[100px]" : "max-h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div data-aos="zoom-in-right" className="w-full md:w-1/2 p-4">
          {questions.slice(4, 8).map((item, index) => (
            <div key={index + 4} className="mb-4">
              <button
                className={`flex tracking-wider justify-between items-center w-full ${
                  activeIndex === index + 4
                    ? "bg-[#c51369] text-white"
                    : "bg-gray-100"
                } border border-[#c51369] rounded-lg px-4 py-2 focus:outline-none`}
                onClick={() => toggleAccordion(index + 4)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                {activeIndex === index + 4 ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </button>
              <div
                className={`mt-2 text-start tracking-wider text-gray-600 overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                  activeIndex === index + 4 ? "max-h-[100px]" : "max-h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
