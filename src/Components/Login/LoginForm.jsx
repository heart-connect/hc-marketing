import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/HCLogoBlackTextVert.svg";
import loginImg from "../../Assets/lgnimg4.png";
import softBg1 from "../../Assets/loginBG1.png";
import axios from "axios";

const countryCodes = [{ code: "+91", country: "IND" }];

const LoginForm = ({ handleSubmit, error, loading }) => {
  const navigate = useNavigate();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Allow only numeric values
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(phoneNumber, selectedCountryCode);
  };

  return (
    <React.Fragment>
      <div className="flex w-full min-h-screen">
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
              We'll need your phone No. to send an OTP for verification.
            </div>

            <div className="mx-auto">
              <form onSubmit={onSubmit} className="grid space-y-8">
                <div className="flex items-center border-none rounded-full shadow-md focus-within:ring-1 focus-within:ring-[#c51369]">
                  <select
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="h-full bg-transparent border-none rounded-l-full focus:outline-none px-4 py-2"
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="flex-1 h-14 rounded-r-full px-4 py-2 border-none text-lg shadow-none focus:outline-none"
                    placeholder="Phone Number"
                    maxLength="15"
                  />
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
                  {isLoading ? "Loading..." : "Get OTP"}
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

        <div className="hidden lg:flex justify-center items-center w-1/2 max-h-[100vh]">
          <img
            src={loginImg}
            alt="loginImg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../Assets/HCLogoBlackTextVert.svg';
// import loginImg from '../../Assets/lgnimg4.png';
// import softBg1 from '../../Assets/loginBG1.png';

// const LoginForm = ({ handleSubmit }) => {
//     const navigate = useNavigate();

//     return (
//         <React.Fragment>
//             <div className="flex w-full min-h-screen">
//                 <div
//                     className="w-full lg:w-1/2 flex items-center justify-center"
//                     style={{
//                         backgroundImage: `url(${softBg1})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center"
//                     }}
//                 >
//                     <div className="px-4 sm:px-0 w-full max-w-sm p-6">
//                         <div className="flex items-center justify-center gap-1">
//                             <img src={logo} alt="logo" className='w-32 h-auto' />
//                         </div>

//                         <div className='mt-6 text-center text-2xl text-[#0d0b0b] font-bold tracking-wider'>
//                             Log In
//                         </div>

//                         <div className='my-6 text-center text-lg text-gray-600 font-semibold tracking-wider'>
//                             We'll need your phone No. to send an OTP for cerification.
//                         </div>

//                         {/* {loginMsgs && <div className="mb-4 text-center text-red-500 text-sm tracking-wider">
//           {loginMsgs}
//         </div>} */}

//                         <div className="mx-auto">
//                             <form
//                                 onSubmit={handleSubmit}
//                                 className="grid space-y-8">
//                                 <input
//                                     type="text"
//                                     className="h-10 rounded-full px-6 py-7 border-none text-lg shadow-md focus:outline-none focus:ring-1 focus:ring-[#c51369]"
//                                     placeholder="Phone Number"
//                                 />
//                                 {/* {errors.phoneNo && <div className="text-red-500 text-sm tracking-wider">
//               {errors.phoneNo}
//             </div>} */}

//                                 <button
//                                     type="submit"
//                                     className="h-12 tracking-wider font-medium bg-[#c51369] hover:bg-primaryBtnHoverColor text-gray-100 text-lg rounded-lg transition ease-in-out hover:duration-300">
//                                     Get OTP
//                                 </button>

//                                 <div className='text-center text-lg text-gray-600 font-medium tracking-wide'>
//                                     Do you want to go <span
//                                         onClick={() => navigate('/')}
//                                         className='font-bold text-[#c51369]'>
//                                         Home
//                                     </span>&nbsp;?
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="hidden lg:flex justify-center items-center w-1/2 max-h-[100vh]">
//                     <img src={loginImg}
//                         alt="loginImg"
//                         className="h-full w-full object-cover" />
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default LoginForm
