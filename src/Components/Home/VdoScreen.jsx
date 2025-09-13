import React, { useEffect } from "react";
import loveCouple from "../../Assets/love-couple.gif";
import { ImCloudDownload } from "react-icons/im";
import { FaHeartCircleCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const VdoScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 md:px-16 flex flex-col md:flex-row mt-6">
      {/* Column 1: Content */}
      <div className="md:w-1/2 p-4">
        <div className="md:mt-16 mt-2 text-[#c51369] text-lg tracking-wider font-semibold mb-4">
          <span
            data-aos="fade-right"
            className="border-b-2 border-[#c51369] pb-1"
          >
            The Story of ❤️ Heart Connect ❤️
          </span>
        </div>

        <div
          data-aos="zoom-in"
          className="text-[#0d0b0b] mt-10 text-2xl md:text-4xl tracking-wider font-bold"
        >
          Unlock the Secrets of Dating
        </div>

        <div
          data-aos="zoom-out"
          className="text-lg tracking-wide text-[#0d0b0b] mt-6 text-justify"
        >
          Unlock the mysteries of love with expert dating insights designed to
          help you build genuine connections. Explore the secrets of attraction,
          communication, and compatibility to navigate modern relationships with
          confidence. Whether you're looking for meaningful conversations or
          lifelong commitment, discover practical strategies to create lasting
          and fulfilling love.
        </div>

        <div
          data-aos="flip-up"
          className="flex justify-center flex-wrap gap-16 mt-6"
        >
          <div>
            <div className="flex justify-center animate-pulse">
              <ImCloudDownload size={80} color="#c51369" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#0d0b0b] tracking-wider text-center my-6">
              100 K+
            </div>
            <div className="text-lg text-gray-600 tracking-wide text-center">
              Downloaded App
            </div>
          </div>

          <div>
            <div className="flex justify-center animate-pulse">
              <FaHeartCircleCheck size={80} color="#c51369" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#0d0b0b] tracking-wider text-center my-6">
              86 %
            </div>
            <div className="text-lg text-gray-600 tracking-wide text-center">
              Successful Relationship
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Image */}
      <div className="md:w-1/2 flex justify-end p-4 relative">
        <img data-aos="flip-left" src={loveCouple} alt="Images" className="" />
        {/* <div className="relative">
                    <img
                        data-aos="flip-left"
                        src={menLove}
                        alt="Images"
                        className="w-[45rem] h-[80%] rounded-lg shadow-lg"
                    />
                    <div
                        onClick={openModal}
                        className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center justify-center bg-[#c51369] rounded-full w-16 h-16 cursor-pointer hover:bg-pink-600 shadow-md animate-pulse">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9V7l5 3-5 3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <VideoModal isOpen={modalOpen} onClose={closeModal} /> */}
      </div>
    </div>
  );
};

export default VdoScreen;
