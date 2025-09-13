import React from "react";
import NewsletterImage from "../../Assets/Newsletter.jpg";

export const Newsletter = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 md:py-16 xl:px-24">
      <div
        className="w-full md:w-11/12 rounded-lg overflow-hidden shadow-lg relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${NewsletterImage})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 md:p-10 text-center">
          <h5 className="text-lg font-bold text-white mb-2">Newsletter</h5>
          <div className="border-b border-[#CE3780] border-[3px] w-9 mb-4 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keep Updated About Us
          </h2>
          <p className="text-lg text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Aenean commodo ligula eget dolor. Aenean massa.
          </p>
          <div className="flex flex-row items-center justify-center mt-4 w-full xl:px-36">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-1 md:px-6 md:mb-0  rounded-l-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Enter your email"
            />
            <button
              type="button"
              className="bg-[#CE3780] text-white py-2 px-1 md:px-6 rounded-r-3xl hover:bg-[#ea127a] transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
