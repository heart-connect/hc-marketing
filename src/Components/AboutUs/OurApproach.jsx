import React from "react";
import YoungCoupleImage from "../../Assets/young-couple-kissing-during-evening-date.jpg";
import DetailedProfiles from "../../Assets/Detailed-Profiles.png";
import ConversationStarters from "../../Assets/Conversation-Starters.png";
import MatchmakingAlgorithm from "../../Assets/Matchmaking-Algorithm.png";

export const OurApproach = () => {
  return (
    <div
      className="relative flex flex-col md:flex-col justify-start items-start h-auto md:h-[500px] w-full bg-cover bg-center text-white pt-6 md:justify-center px-0 xl:px-44"
      style={{
        backgroundImage: `url(${YoungCoupleImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 w-full">
        <div className="relative z-10 w-full text-start px-8 pt-8">
          <h1 className="w-full mx-auto pb-4 text-1xl text-gray-200 font-semibold tracking-wide">
            Our Approach
          </h1>
          <h3 className="text-5xl font-bold tracking-wide">
            The Heart Connect Difference
          </h3>
        </div>
        <div className="relative z-10 grid grid-flow-row md:grid-flow-col gap-8 px-8 pt-8 w-full mb-16 md:justify-center md:items-center">
          <div className="flex flex-col items-start text-left">
            <img
              src={DetailedProfiles}
              width={100}
              height={100}
              alt="Detailed Profiles"
              className="mb-4"
            />
            <span className="text-[25px] py-4 font-semibold tracking-wide">
              Personalized Profiles
            </span>
            <p className="text-gray-200 tracking-wide">
              Share just the right details to attract meaningful connections.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <img
              src={ConversationStarters}
              width={100}
              height={100}
              alt="Conversation Starters"
              className="mb-4"
            />
            <span className="text-[25px] py-4 font-semibold tracking-wide">
              Genuine Conversations
            </span>
            <p className="text-gray-200 tracking-wide">
              Use guided prompts to spark engaging and comfortable chats.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <img
              src={MatchmakingAlgorithm}
              width={100}
              height={100}
              alt="Matchmaking Algorithm"
              className="mb-4"
            />
            <span className="text-[25px] py-4 font-semibold tracking-wide">
              Smart Matchmaking
            </span>
            <p className="text-gray-200 tracking-wide">
              Our algorithm connects you with truly compatible individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
