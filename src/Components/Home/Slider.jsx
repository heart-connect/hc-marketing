import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Slider.css";
import img1 from "../../Assets/cars-1.jpg";
import img2 from "../../Assets/cars-2.jpg";
import img3 from "../../Assets/cars-3.jpg";
import img4 from "../../Assets/cars-4.jpg";
import gif from "../../Assets/heart-12791_256.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    image: img2,
    direction: "from-left",
  },
  {
    image: img3,
    direction: "from-top",
  },
  {
    image: img1,
    direction: "from-right",
  },
  {
    image: img4,
    direction: "from-bottom",
  },
];

const textVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: "0",
    transform: "translate(-50%, -50%)",
    transition: { duration: 1 },
  },
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gray-600">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide
              ? `opacity-100 ${slide.direction}`
              : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      ))}
      <div className="bg-[#080808bb] w-full h-full absolute">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-5 rounded-lg text-white text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div
            data-aos="zoom-in-down"
            className="mt-16 text-[#fdfdfd] text-lg tracking-wider font-semibold mb-4 flex justify-center"
          >
            <span className="border-b-2 border-[#c51369] pb-1">
              ❤️ Embrace Love with Heart Connect – Meet, Match, Connect! ❤️
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="lg:text-6xl md:text-3xl text-2xl font-medium tracking-wider lg:leading-[70px]"
          >
            Dating for Mature Hearts.
            <br />
            <span className="text-[#c51369]">
              Because Every Heart Needs Love.
            </span>
          </h1>

          <div className="text-[#fdfdfd] text-lg md:text-xl tracking-wider font-semibold mt-6 text-center">
            Serious singles, meaningful connections.
          </div>

          <div className="flex justify-center w-full">
            <img src={gif} className="hover:animate-bounce" alt="gif" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
