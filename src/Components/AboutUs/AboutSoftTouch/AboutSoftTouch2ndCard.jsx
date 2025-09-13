import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import valuesImage from "../../../Assets/Values-Image.png";

export const AboutSoftTouch2ndCard = () => {
  return (
    <div className="block md:flex w-full md:justify-center md:items-center">
      {/* left side */}
      <div className="md:h-[700px] md:w-[50%] flex flex-col md:flex-row items-center md:items-end md:justify-center p-4">
        <div className="p-8 flex flex-col items-center md:items-start">
          <IoCloudDownloadOutline color="#CE3780" size={45} />
          <span className="text-[25px]">105 K+</span>
          <h6 className="text-gray-600 dark:text-gray-300">Downloaded App</h6>
        </div>
        <div className="p-8 flex flex-col items-center md:items-start">
          <LuHeartHandshake color="#CE3780" size={45} />
          <span className="text-[25px]">90 %</span>
          <h6 className="text-gray-600 dark:text-gray-300">
            Successful Relationship
          </h6>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-[50%] flex justify-center md:justify-start py-4">
        <img
          className="w-full h-[700px] object-top md:object-fit"
          src={valuesImage}
          alt="valuesImage not found"
        />
      </div>
    </div>
  );
};
