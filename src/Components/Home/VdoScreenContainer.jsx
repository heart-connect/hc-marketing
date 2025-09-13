import React, { useEffect } from "react";
import img1 from "../../Assets/img1.png";
import VdoScreen from "./VdoScreen";
import AOS from "aos";
import "aos/dist/aos.css";

const VdoScreenContainer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-between bg-[#c51369] px-4 md:px-16 py-5 overflow-x-hidden">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 px-2 flex justify-start">
          <img
            data-aos="fade-right"
            src={img1}
            alt="img-1"
            className="w-[70%] h-auto"
          />
        </div>

        <div className="w-full md:w-1/3 px-2 py-6">
          <div
            data-aos="zoom-in"
            className="text-[#fdfdfd] text-xl md:text-2xl tracking-wider font-bold text-center"
          >
            Kickstart The Magical Love Journey
          </div>

          <div
            data-aos="zoom-out"
            className="text-gray-300 text-sm md:text-lg tracking-wider font-semibold mt-4 text-center"
          >
            Where Soulmates Find Their Destiny!
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-4 md:mb-0 px-2 flex justify-end">
          <img
            data-aos="fade-left"
            src={img1}
            alt="img-2"
            className="w-[70%] h-auto"
          />
        </div>
      </div>

      <VdoScreen />
    </React.Fragment>
  );
};

export default VdoScreenContainer;
