import React from "react";
import { OurTeamCards } from "./OurTeamCards";

export const OurTeam = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center pt-10">
        <h4 className="text-[#CE3780] text-lg font-semibold mb-2">Our Team</h4>
        <div className="border-b border-[#CE3780] w-9 mb-4"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wide">
          The Team Crafting Your Love Story
        </h2>
        <p className="text-gray-700 leading-relaxed tracking-wide text-center mb-4 w-full px-2 md:w-[50%]">
          Our passionate team blends expertise, innovation, and dedication to
          craft meaningful connections, ensuring your journey to love is truly
          magical. ❤️
        </p>
      </div>

      <OurTeamCards />
    </React.Fragment>
  );
};
