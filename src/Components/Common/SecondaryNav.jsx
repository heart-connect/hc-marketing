import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const SecondaryNav = ({ banner, page_name, desc }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative flex justify-center items-center h-[250px] md:h-[400px] w-full bg-cover bg-center text-white pt-6"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div data-aos="fade-up" className="relative z-10 text-center p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">
          {page_name}
        </h1>
        <p className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto tracking-wide text-sm sm:text-base md:text-lg lg:text-xl">
          {desc}
        </p>
      </div>
    </div>
  );
};
