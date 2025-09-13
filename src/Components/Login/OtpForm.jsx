import React, { useState } from "react";
import logo from "../../Assets/HCLogoBlackTextVert.svg";
import loginImg from "../../Assets/lgnImg3.png";
import softBg1 from "../../Assets/loginBG2.png";
import { useNavigate } from "react-router-dom";

const OtpForm = ({ handleOtpSubmit, error,loading }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOtpSubmit(otp.join(""));
  };

  return (
    <React.Fragment>
      <div className="flex w-full min-h-screen">
        <div className="hidden lg:flex justify-center items-center w-1/2 max-h-[100vh]">
          <img
            src={loginImg}
            alt="loginImg"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{
            backgroundImage: `url(${softBg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-4 sm:px-0 w-full max-w-sm p-6">
            <div className="flex items-center justify-center gap-1">
              <img src={logo} alt="logo" className="w-32 h-auto" />
            </div>

            <div className="mt-6 text-center text-2xl text-[#0d0b0b] font-bold tracking-wider">
              Log In
            </div>

            <div className="my-6 text-center text-lg text-gray-600 font-semibold tracking-wider">
              Please enter the one time password to verify your Account.
            </div>

            <div className="mx-auto">
              <form onSubmit={handleSubmit} className="grid space-y-8">
                <div className="flex justify-center space-x-6">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="h-14 w-14 rounded-full px-2 py-1 border-none text-lg text-center shadow-md focus:outline-none focus:ring-1 focus:ring-[#c51369]"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
                </div>
                {error && (
                  <div className="text-center text-red-500 text-sm tracking-wider">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  className="h-12 tracking-wider font-medium bg-[#c51369] hover:bg-primaryBtnHoverColor text-gray-100 text-lg rounded-lg transition ease-in-out hover:duration-300"
                >
                  {loading?"Loading...":"Submit"}
                </button>

                <div className="text-center text-lg text-gray-600 font-medium tracking-wide">
                  Do you want to go{" "}
                  <span
                    onClick={() => navigate("/")}
                    className="font-bold text-[#c51369] hover:underline cursor-pointer"
                  >
                    Home
                  </span>
                  &nbsp;?
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtpForm;
