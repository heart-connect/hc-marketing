import React from "react";
import banner from "../../Assets/bbanner.jpg";
import mob from "../../Assets/Mockup.png";
import GPlay from "../../Assets/google-play.png";
import gif from "../../Assets/heart-12791_256.gif";
import { FaApple } from "react-icons/fa";

const DownloadedApp = () => {
  return (
    <div
      className="flex flex-col md:flex-row px-4 md:px-16"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* First Column */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div>
          <div
            data-aos="fade-right"
            className="md:mt-16 mt-2 text-[#c51369] text-lg tracking-wider font-semibold mb-4 text-start"
          >
            <span className="border-b-2 border-[#c51369] pb-1">
              Connect with our Heart
            </span>
          </div>

          <div
            data-aos="fade-right"
            className="text-[#0d0b0b] text-start mt-6 text-2xl md:text-4xl tracking-wider font-bold"
          >
            Thousands Find Love and Connection Every Day
          </div>

          <div
            data-aos="flip-up"
            className="text-lg tracking-wide text-[#0d0b0b] mt-6 text-justify"
          >
            Every day, countless hearts come together, forming meaningful
            connections and lasting relationships. Join a thriving community
            where love blossoms, friendships grow, and genuine bonds are
            created. Your perfect match could be just a connection away!
          </div>
          <div className="mt-6 flex flex-wrap justify-start items-center gap-4">
            <button className="max-h-16 h-16 py-2 px-4 w-auto flex items-center justify-center bg-[#0d0b0b] text-white rounded-xl hover:bg-gray-800 hover:shadow-2xl transition-colors duration-200">
              <FaApple size={42} className="mr-3" />
              <div className="tracking-wider">
                <p className="text-xs font-semibold">Download on the</p>
                <p className="text-lg font-bold">App Store</p>
              </div>
            </button>

            <button
              className="max-h-16 h-16 py-2 px-4 w-auto flex items-center justify-center bg-[#0d0b0b] text-white rounded-xl hover:bg-gray-800 hover:shadow-2xl transition-colors duration-200"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.heartconnect",
                  "_blank"
                )
              }
            >
              <img
                src={GPlay}
                alt="Google Play logo"
                className="w-7 h-auto mr-3"
              />
              <div className="tracking-wider">
                <p className="text-xs font-semibold">GET IT ON</p>
                <p className="text-lg font-bold">Google Play</p>
              </div>
            </button>
          </div>

          <div className="flex justify-center w-full mt-2">
            <img src={gif} alt="gif" />
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex justify-center items-center w-full md:w-1/2 px-6 py-16">
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src={mob}
          alt="img"
          className="w-[90%] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default DownloadedApp;
