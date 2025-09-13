/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
import React from "react";
import teamM1 from "../../../Assets/teamM1.png";
import teamM2 from "../../../Assets/teamM2.png";
import teamM3 from "../../../Assets/teamM3.png";
import { IoLogoFacebook } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

export const OurTeamCards = () => {
  const images = [
    { image: teamM1, name: "Ananya", role: "Product Manager" },
    { image: teamM3, name: "Ishaan", role: "Tech Team Lead" },
    { image: teamM2, name: "Nisha", role: "Marketing Specialist" },
  ];

  return (
    <div className="flex flex-wrap px-0 xl:px-[150px]">
      {images.map((member, index) => (
        <div key={index} className="w-full md:w-1/3 lg:w-1/3 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              loading="lazy"
              decoding="async"
              width="1333"
              height="2000"
              src={member.image}
              className="w-full h-auto"
              alt={`${member.name}`}
              sizes="(max-width: 1333px) 100vw, 1333px"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white">
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <IoLogoFacebook size={32} color="#C6196D" />
                  </li>
                  <li>
                    <TiSocialTwitter size={32} color="#C6196D" />
                  </li>
                  <li>
                    <TiSocialLinkedin size={32} color="#C6196D" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-[-40px]">
            <div className="flex flex-col bg-white text-black shadow-lg w-[80%] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-[#C6196D]">
                {member.name}
              </h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
