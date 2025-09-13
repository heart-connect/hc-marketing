import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import axios from "axios";
import emailjs from "emailjs-com";
import { TbPhoneCall } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";

export const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }
    if (!formData.comment.trim()) newErrors.comment = "Comment is required.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      setIsMessageSent(false);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URI}/contactus/contacts`,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            comment: formData.comment,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const emailTemplateParams = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          comment: formData.comment,
        };

        await emailjs.send(
          "service_ng1xbrg",
          "template_et6awnf",
          emailTemplateParams,
          "UVPveEch4V8m0LOHL"
        );

        console.log("API Response:", response.data);
        setIsLoading(false);
        setIsMessageSent(true);
        alert("Message sent successfully!");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          comment: "",
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
        setIsLoading(false);
        alert("Failed to send the message. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full space-y-4 md:space-y-0 md:space-x-4 py-8 px-3 md:py-24 md:px-36 gap-4">
      {/* Left Side */}
      <div className="w-full p-4">
        <h4 className="text-[#CE3780] tracking-wider">Contact Us</h4>
        <div className="border border-[#CE3780] w-9 my-2"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide">
          Stay Close to Us
        </h2>
        <p className="mt-2 tracking-wide">
          We’d love to hear from you! Whether you have a question, feedback, or
          need a helping hand, our team is here to ensure your Heart Connect
          journey is nothing short of magical. Reach out to us anytime! ❤️
        </p>

        <div className="block 2xl:flex lg:gap-4 ">
          <div className="w-full bg-white border rounded-lg shadow-lg mt-6 dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#CE3780] mb-2">
                Support Team
              </h3>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-2 tracking-wider">
                  <FiMail size={22} color="#CE3780" />
                  support@heartconnect.app
                </span>
                <span className="flex items-center gap-2 tracking-wider">
                  <TbPhoneCall size={22} color="#CE3780" />
                  +91 63719 33595
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="block 2xl:flex lg:gap-4 ">
          <div className="w-full bg-white border rounded-lg shadow-lg mt-6 dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#CE3780] mb-2">
                Contact Us
              </h3>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-2 tracking-wider">
                  <FiMail size={22} color="#CE3780" />
                  ushabatiservices@gmail.com
                </span>
                <span className="flex items-center gap-2 tracking-wider">
                  <GrLocation size={22} color="#CE3780" />
                  Gopabandhu Nagar, Semiliguda, Koraput, Odisha - 764036
                </span>
                <span className="flex items-center gap-2 tracking-wider">
                  <TbPhoneCall size={22} color="#CE3780" />
                  +91 63719 33595
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white border rounded-lg shadow-lg px-8 py-12 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name here"
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name here"
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Add email"
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Add Contact Number"
                className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Comments"
              className="w-full p-6 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="transform duration-300 ease-in-out flex items-center bg-[#c51369] text-[#fdfdfd] hover:text-[#c51369] hover:bg-[#fdfdfd] hover:shadow-md hover:shadow-[#9e788a] px-4 py-2 focus:outline-none font-semibold tracking-wider rounded-bl-3xl rounded-tr-3xl"
            >
              {isLoading ? (
                "Please wait..."
              ) : (
                <>
                  <HiOutlineMail size={20} />
                  &nbsp;Send a Message
                </>
              )}
            </button>
          </div>
          {isMessageSent && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </form>
        <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
          <p className="text-lg font-semibold">About Heart Connect</p>
          <p className="mt-2">
          <span className="text-pink-600 font-semibold">Heart Connect</span> is a major product of{" "}
            <span className="text-pink-600 font-semibold">Ushabati Services Pvt Ltd</span>, the company behind its
            development and management. <span className="text-pink-600 font-semibold">Ushabati Services Pvt Ltd</span> oversees the
            app’s operations, ensuring a smooth user experience, implementing
            security measures, and continuously improving its features to cater
            to modern dating needs.
          </p>
        </div>
      </div>
    </div>
  );
};
