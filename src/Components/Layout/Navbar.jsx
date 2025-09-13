import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../Assets/HcLogoHor.png";
import blackLogo from "../../Assets/HcLogo-black.png";
import smallLogo from "../../Assets/HcLogoHor.png";
import smallBlackLogo from "../../Assets/HcLogo-black.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../Context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTextColor, setNavTextColor] = useState("#fdfdfd");
  const [isNavScroll, setIsNavScroll] = useState(false);
  const { isAuthenticated } = useAuth();

  // console.log("Login------status", isAuthenticated);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setNavTextColor("#c51369");
        setIsNavScroll(true);
      } else {
        setNavTextColor("#fdfdfd");
        setIsNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`h-20 flex items-center z-50 w-full px-6 md:px-20
    ${isNavScroll ? "shadow-lg bg-white" : null} fixed`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 md:gap-12">
          <Link to="/">
            <img
              data-aos="fade-right"
              src={isNavScroll ? blackLogo : logo}
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        <div
          data-aos="fade-down"
          className="hidden lg:flex items-center gap-8 text-[#fdfdfd] text-md md:text-lg tracking-wide"
          style={{ color: navTextColor }}
        >
          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>

          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Services
          </Link>

          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About Us
          </Link>

          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/contact"
          >
            Contact Us
          </Link>

          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/term-and-condition"
          >
            T & C
          </Link>

          <Link
            className="hover:text-[#c51369] transition transform ease-in-out duration-300"
            to="/refund-and-cancellation"
          >
            RFD & CXL
          </Link>
          {isAuthenticated && (
            <Link
              className="hover:text-[#c51369] transition transform ease-in-out duration-300"
              to="/coin-plans"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Coin Plans
            </Link>
          )}
        </div>

        <div className="relative z-50">
          {isAuthenticated ? (
            <button
              onClick={() => navigate("/profile")}
              data-aos="fade-left"
              className="transform duration-300 ease-in-out hidden lg:flex items-center bg-[#c51369] text-[#fdfdfd] hover:text-[#c51369] hover:bg-[#fdfdfd] hover:shadow-md hover:shadow-[#9e788a] px-4 py-2 focus:outline-none font-semibold tracking-wider rounded-bl-3xl rounded-tr-3xl"
            >
              <FaRegUserCircle size={24} />
              &nbsp;Profile
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              data-aos="fade-left"
              className="transform duration-300 ease-in-out hidden lg:flex items-center bg-[#c51369] text-[#fdfdfd] hover:text-[#c51369] hover:bg-[#fdfdfd] hover:shadow-md hover:shadow-[#9e788a] px-4 py-2 focus:outline-none font-semibold tracking-wider rounded-bl-3xl rounded-tr-3xl"
            >
              <HiOutlineLogin size={24} />
              &nbsp;Login
            </button>
          )}

          <button
            className="lg:hidden flex items-center text-[#fdfdfd] focus:outline-none"
            onClick={toggleMenu}
          >
            <HiMenu
              size={30}
              color={`${isNavScroll && !menuOpen ? "black" : "white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 flex flex-col z-50">
          <div className="flex justify-between items-center p-4 md:p-6 mb-6">
            <Link to="/" className="flex items-center" onClick={toggleMenu}>
              <img
                src={isNavScroll ? smallBlackLogo : smallLogo}
                alt="Logo"
                className="h-8 w-auto mr-2"
              />
            </Link>
            <button
              className="text-primaryTextColor focus:outline-none"
              onClick={toggleMenu}
            >
              <HiX size={22} color="#85777D" />
            </button>
          </div>

          <Link
            to="/services"
            className="block py-2 text-lg text-center"
            onClick={toggleMenu}
          >
            Services
          </Link>

          <Link
            to="/about"
            className="block py-2 text-lg text-center"
            onClick={toggleMenu}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="block py-2 text-lg text-center"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>

          <button
            onClick={() => navigate("/auth/login")}
            className="transform duration-300 ease-in-out lg:hidden flex items-center bg-[#c51369] text-[#fdfdfd] hover:text-[#c51369] hover:bg-[#fdfdfd] hover:shadow-md hover:shadow-[#9e788a] px-4 py-2 focus:outline-none font-semibold tracking-wider rounded-bl-3xl rounded-tr-3xl"
          >
            <HiOutlineLogin size={24} />
            &nbsp;Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
