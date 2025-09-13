import React, { useEffect } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { TbUsersPlus } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-4 md:px-16">
      {/* First Column */}
      <div
        // data-aos="zoom-out-up"
        className="w-full md:w-1/3 p-4 flex flex-col items-center"
      >
        <div>
          <div className="md:mt-16 mt-2 text-[#c51369] text-lg tracking-wider font-semibold mb-4">
            <span className="border-b-2 border-[#c51369] pb-1">Features</span>
          </div>

          <div className="text-[#0d0b0b] mt-6 text-2xl md:text-4xl tracking-wider font-bold">
            Experience the Best of Our Exclusive Features
          </div>

          <div className="text-lg tracking-wide text-[#0d0b0b] mt-6">
            Explore and enjoy unique features crafted to elevate your journey.
          </div>

          <button
            onClick={() => navigate("/services")}
            className="mt-6 transform duration-300 ease-in-out flex items-center bg-[#c51369] text-[#fdfdfd] hover:text-[#c51369] hover:bg-[#fdfdfd] hover:shadow-md hover:shadow-[#9e788a] px-4 py-2 focus:outline-none font-semibold tracking-wider rounded-bl-3xl rounded-tr-3xl"
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Second Column */}
      <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full">
          {/* Card 1 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-lg shadow-md p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div>
              <TbUsersPlus color="#c51369" size={40} />

              <h2 className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-3">
                Profile Verification
              </h2>
              <p className="text-gray-600 text-md lg:text-lg tracking-wide">
                Profile verification authenticates users by validating
                identities, enhancing trust and credibility in online
                connections.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-lg shadow-md p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div>
              <BsChatSquareText color="#c51369" size={40} />

              <h2 className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-3">
                Communication
              </h2>
              <p className="text-gray-600 text-md lg:text-lg tracking-wide">
                Communication and engagement tools designed to build meaningful
                connections and relationships on the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full">
          {/* Card 3 */}
          <div
            data-aos="flip-up"
            className="bg-[#c51369] rounded-lg shadow-md p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div>
              <MdOutlineWorkspacePremium color="#ffffff" size={40} />

              <h2 className="text-xl lg:text-2xl font-semibold text-[#ffffff] tracking-wider my-3">
                Premium Features
              </h2>
              <p className="text-gray-200 text-md lg:text-lg tracking-wide">
                Advanced features and exclusive benefits for subscribers,
                ensuring a superior experience on the platform.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-lg shadow-md p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div>
              <AiOutlineSafety color="#c51369" size={40} />

              <h2 className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-3">
                Safety Guaranty
              </h2>
              <p className="text-gray-600 text-md lg:text-lg tracking-wide">
                Commitment to safety with advanced security measures,
                safeguarding users' privacy and well-being on the platform.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-lg shadow-md p-10 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div>
              <PiUserCirclePlusBold color="#c51369" size={40} />

              <h2 className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-3">
                Meet Nearby People
              </h2>
              <p className="text-gray-600 text-md lg:text-lg tracking-wide">
                Discover and connect with nearby people, creating local bonds
                for meaningful relationships and interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
