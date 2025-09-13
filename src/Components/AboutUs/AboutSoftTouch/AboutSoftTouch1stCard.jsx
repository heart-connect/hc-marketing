import React from "react";
import SignatureImage from "../../../Assets/Signature_Nihar.png";

export const AboutSoftTouch1stCard = () => {
  return (
    <div className="h-[450px] md:h-0">
      <div className="p-6 pt-4 z-10 absolute w-full mt-[-30px] md:mt-0 md:pt-12 lg:pt-12 xl:pt-22 md:pl-10 lg:pl-20 md:w-[500px] lg:w-[700px] h-auto">
        <div className="bg-white border rounded-lg shadow-lg px-8 py-6 md:py-12 dark:bg-gray-800 dark:border-gray-700">
          <div className=" md:items-center">
            <div className=" md:pr-8 mb-8 md:mb-0">
              <h4 className="text-[#CE3780] text-lg font-semibold mb-2">
                About Soft Touch
              </h4>
              <div className="border-b border-[#CE3780] w-9 mb-4"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Love Can Happen Anywhere, Anytime
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
              We believe love can spark anywhere and anytime. Our platform is designed to turn everyday moments into meaningful connections, helping you find genuine relationships through spontaneous chats and heartfelt interactions.
              </p>
              <img
                width={300}
                src={SignatureImage}
                alt="Signature pic not found"
              />
            </div>
            <div className=" md:pl-8">
              <div className="mb-4">
                <p className="text-[#040404] font-medium">Nihar Ranjan Behera</p>
                <p className="text-[#5E5E5E]">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
