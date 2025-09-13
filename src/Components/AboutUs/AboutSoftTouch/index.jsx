import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "./AboutSoftTouch.css";
import ceoImg from "../../../Assets/ceoImg.webp";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineFacebook } from "react-icons/ai";

export const AboutSoftTouch = () => {
  return (
    <React.Fragment>
      <section className="animated-bg flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Additional Content Below the Section */}
        <div className="mb-16 px-8 flex justify-center tracking-wide">
          <div className="w-full bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Heart Connect
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">
                Heart Connect
              </strong>{" "}
              is a major product of{" "}
              <strong className="text-pink-600 dark:text-pink-400">
                Ushabati Services Pvt Ltd
              </strong>
              , the company behind its development and management. Ushabati
              Services Pvt Ltd ensures a seamless user experience, implements
              robust security measures, and continually enhances the app’s
              features to meet the evolving needs of modern dating.
            </p>
          </div>
        </div>

        <div className="animated-card bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full">
          {/* Profile Image Section */}
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-blue-50">
            <img
              src={ceoImg}
              alt="CEO of Heart Connect"
              className="min-w-60 min-h-60 md:min-w-[20rem] md:min-h-[20rem] max-w-60 max-h-60 md:max-w-[20rem] md:max-h-[20rem] rounded-full shadow-lg"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Mr. Nihar Ranjan Behera
            </h2>
            <p className="text-lg text-gray-500 font-medium mt-1">
              CEO & Founder, Heart Connect
            </p>

            <p className="text-gray-700 mt-6 text-justify leading-relaxed text-base md:text-lg">
              With a heart full of passion and a vision for true love, Mr. Nihar
              Ranjan Behera has shaped Heart Connect into a haven for meaningful
              relationships. His leadership and innovation have brought
              countless souls together, turning dreams of love into reality
              across the world.
            </p>

            <div className="flex justify-center md:justify-start space-x-6 mt-10 text-gray-500">
              <a
                href="https://www.instagram.com/knihar1?igsh=MWNxbGdhNXQ3c2FhOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <IoLogoInstagram size={28} />
              </a>
              <a
                href="https://x.com/niharbpl?t=qpBqS36j4TzjdbqYWoaODQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <RiTwitterXFill size={28} />
              </a>
              <a
                href="https://www.facebook.com/niharranjan.behera.10?mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition-colors"
              >
                <AiOutlineFacebook size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="animated-card mt-6 max-w-3xl bg- shadow-lg rounded-2xl p-8 text-center">
          <h2 className="text-xl md:text-2xl tracking-wider font-bold text-gray-800">
            Words from Our Visionary Founder
          </h2>

          <FaQuoteLeft className="text-3xl text-pink-500 mb-4" />
          <p className="text-lg text-gray-700 italic tracking-wide">
            "Love is the most beautiful journey, and at Heart Connect, we strive
            to make it magical for everyone. Our mission is to create a space
            where genuine connections flourish, hearts unite, and lasting love
            stories begin."
          </p>
          <FaQuoteRight className="text-3xl text-pink-500 mt-4" />
        </div>
      </section>
    </React.Fragment>
  );
};
