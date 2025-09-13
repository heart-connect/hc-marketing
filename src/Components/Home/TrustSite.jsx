import React from "react";
import overlayImage from "../../Assets/couple2.png";
import cicon1 from "../../Assets/cicon1.svg";
import cicon2 from "../../Assets/cicon2.svg";
import cicon3 from "../../Assets/cicon3.svg";
import cicon4 from "../../Assets/cicon4.svg";

const TrustSite = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* First Column */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 p-4 space-y-8">
        <div className="flex flex-col items-center text-center">
          <img
            data-aos="zoom-out-up"
            src={cicon2}
            alt="icon"
            className="h-16 m-auto"
          />
          <h2
            data-aos="flip-right"
            className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-2"
          >
            Incredible Community
          </h2>
          <p
            data-aos="flip-down"
            className="text-gray-600 text-md lg:text-lg tracking-wide"
          >
            Join a vibrant community where true connections grow and meaningful
            bonds form.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            data-aos="zoom-out-up"
            src={cicon4}
            alt="icon"
            className="h-16 m-auto"
          />
          <h2
            data-aos="flip-right"
            className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-2"
          >
            Become a Member
          </h2>
          <p
            data-aos="flip-down"
            className="text-gray-600 text-md lg:text-lg tracking-wide"
          >
            Join a lively community and connect with people who share your
            interests.
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          data-aos="zoom-out-down"
          src={overlayImage}
          alt="Overlay"
          className={`h-[250px] md:h-[80%] object-contain`}
        />
      </div>

      {/* Third Column */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 p-4 space-y-8">
        <div className="flex flex-col items-center text-center">
          <img
            data-aos="zoom-out-up"
            src={cicon3}
            alt="icon"
            className="h-16 m-auto"
          />
          <h2
            data-aos="flip-right"
            className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-2"
          >
            Secure Groups
          </h2>
          <p
            data-aos="flip-down"
            className="text-gray-600 text-md lg:text-lg tracking-wide"
          >
            Connect with secure circles and engage in a trusted, interactive
            space.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            data-aos="zoom-out-up"
            src={cicon1}
            alt="icon"
            className="h-16 m-auto"
          />
          <h2
            data-aos="flip-right"
            className="text-xl lg:text-2xl font-semibold text-[#0d0b0b] tracking-wider my-2"
          >
            Supportive Forums
          </h2>
          <p
            data-aos="flip-down"
            className="text-gray-600 text-md lg:text-lg tracking-wide"
          >
            Engage in interactive spaces where discussions are open, friendly,
            and uplifting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSite;
