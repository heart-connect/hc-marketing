import React, { Fragment } from "react";
import contactUsImage from "../../Assets/contact-us.jpg";
import { SecondaryNav } from "../Common/SecondaryNav";
import Section from "../Common/Section";

export const PrivacyPolicyView = () => {
  return (
    <Fragment>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Privacy Policy"
        desc="By using Heart Connect, you agree to our Privacy Policy, which details how we collect, use, and protect your personal information."
      />

      <div className="min-h-screen bg-gray-100 flex items-center pt-6 justify-center">
        <div className="p-4 w-full max-w-6xl">
          <h4 className="text-xl font-semibold mb-4 text-center tracking-wider">
            Welcome to Heart Connect
          </h4>
          <p className="text-gray-700 mb-6 text-center px-4 tracking-wide">
            Heart Connect ("we," "our," or "us") values your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and disclose your data when using the
            Heart Connect mobile application ("App") and associated website
            (collectively, the "Platform"). By using the Platform, you consent
            to our collection, use, and disclosure of your information as
            described in this Privacy Policy.
          </p>

          <Section
            title="Information We Collect & How We Use It"
            des="We collect various types of information to provide and improve our services. Below are the categories of data we collect and their purposes."
            colorClass="text-blue-500"
            lineColor="bg-gradient-to-r from-blue-400 to-blue-600"
            sectionArray={[
              {
                title: "Log-in Data",
                des: [
                  "Collected Data: User ID, mobile number, password, gender, voice recording, IP address, and indicative age range.",
                  "Purpose: Account setup and authentication, Security, fraud detection, and account management, Personalization (language & location-based), Customer support and communication, Service improvement through user feedback and Analysis of user demographics and engagement.",
                ],
              },
              {
                title: "Profile Information",
                des: [
                  "Collected Data: Username, birth year, and biography.",
                  "Purpose: Personalizing user profiles and Enhancing platform engagement.",
                ],
              },
              {
                title: "Content You Share",
                des: [
                  "Collected Data: User-generated content (text, images, videos, voice recordings, etc.), Location and log data related to shared content.",
                  "Purpose: Enabling social interactions and Improving user experience and engagement.",
                ],
              },
              {
                title: "Information from Third-Party Sources",
                des: [
                  "Collected Data: Data from business partners, analytics providers, and search services.",
                  "Purpose: Service enhancement and personalization, Fraud detection and security.",
                ],
              },
              {
                title: "Log Data",
                des: [
                  "Collected Data: Device information, search history, interactions, metadata (timestamps, locations, etc.)",
                  "Purpose: Performance analysis and optimization, Fraud detection and security, Improving recommendations and advertisements.",
                ],
              },
              {
                title: "Cookies & Tracking Technologies",
                des: [
                  "Collected Data: Data collected through cookies for user tracking and personalization.",
                  "Purpose: Enhancing user experience, Analytics and targeted advertising.",
                ],
              },
              {
                title: "Surveys",
                des: [
                  "Collected Data: Personal information voluntarily provided in surveys.",
                  "Purpose: Improving platform services, Conducting user research.",
                ],
              },
              {
                title: "User Search Data",
                des: [
                  "Collected Data: Search queries within the platform.",
                  "Purpose: Enhancing search experience, Personalization and targeted advertising.",
                ],
              },
              {
                title: "Account Security & Verification",
                des: [
                  "Collected Data: Phone number, OTP verification, SMS access.",
                  "Purpose: Identity verification and enhancing account security.",
                ],
              },
              {
                title: "Contacts List (With Consent)",
                des: [
                  "Collected Data: Access to mobile contacts list (with user permission).",
                  "Purpose: Enabling the 'Invite Users' feature.",
                ],
              },
              {
                title: "Location Information",
                des: [
                  "Collected Data: GPS, IP-based location, and public location-based posts.",
                  "Purpose: Security, fraud prevention, enabling location-based services, and language customization.",
                ],
              },
              {
                title: "Customer Support Information",
                des: [
                  "Collected Data: Information shared with support teams.",
                  "Purpose: Investigating and resolving support queries.",
                ],
              },
              {
                title: "Device Data",
                des: [
                  "Collected Data: Device type, operating system, app version, Bluetooth, Wi-Fi signals, storage availability, installed applications, media gallery access (with consent).",
                  "Purpose: Platform optimization, facilitating media sharing, and enhancing performance and security.",
                ],
              },
              {
                title: "Chat & Conversation Data",
                des: [
                  "Collected Data: Messages, interactions, timestamps, and engagement metrics.",
                  "Purpose: Improving chat suggestions and recommendations, and Enhancing marketing and advertising effectiveness.",
                ],
              },
              {
                title: "Contest Information",
                des: [
                  "Collected Data: User-provided contest entries.",
                  "Purpose: Facilitating contest participation and prize distribution.",
                ],
              },
              {
                title: "Payment Information",
                des: [
                  "Collected Data: Credit/debit card details when making direct purchases.",
                  "Purpose: Processing financial transactions and sales records.",
                ],
              },
            ]}
          />

          <Section
            title="Where We Store Your Personal Information"
            des="We store your data with Amazon Web Services cloud platform provided by Amazon Web Services, Inc. (headquartered at 410 Terry Ave. N Seattle, Washington 98109, USA) and also on Google Cloud Platform provided by Google LLC (headquartered at 1600 Amphitheatre Parkway, Mountain View, California 94043, USA). By using our Platform, you agree to the storage of your Personal Information on these cloud services."
            colorClass="text-orange-500"
            lineColor="bg-gradient-to-r from-orange-400 to-orange-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "Your information may be transferred to, and stored in, a country other than your country of residence, including but not limited to the United States. By using the Platform, you consent to such transfer of your information. We will take reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy.",
                ],
              },
            ]}
          />

          <Section
            title="Retention of Data"
            des="We retain your Personal Information for as long as your account remains active, or as needed to provide you with the Services. We may also retain and use your Personal Information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. We take all reasonable steps to ensure that your Personal Information is only retained for as long as is necessary for the purpose for which it was collected and in compliance with applicable laws."
            colorClass="text-purple-500"
            lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "If you wish to request deletion of your account or Personal Information, you can do so by contacting our support team. However, please note that we may retain certain information as required by law or for legitimate business purposes.",
                ],
              },
            ]}
          />

          <Section
            title="Your Rights and Choices"
            des="You have certain rights regarding the Personal Information that we collect and process about you. Depending on your location and applicable laws, these rights may include:"
            colorClass="text-green-500"
            lineColor="bg-gradient-to-r from-green-400 to-green-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "Access and Correction: You can access and update certain Personal Information within your account settings. If you believe any of the information we hold about you is inaccurate, you can request that it be corrected.",
                  "Data Portability: In certain circumstances, you may have the right to request a copy of your Personal Information in a structured, commonly used, and machine-readable format.",
                  "Erasure: You may have the right to request the deletion of your Personal Information, subject to certain conditions.",
                  "Objection and Restriction: You may have the right to object to our processing of your Personal Information or request that we restrict processing under certain circumstances.",
                  "Withdraw Consent: If we rely on your consent to process your Personal Information, you have the right to withdraw your consent at any time.",
                  "Lodging Complaints: If you have concerns about our data processing practices, you may have the right to file a complaint with the relevant data protection authority. To exercise any of these rights, you may contact us via the details provided at the end of this Privacy Policy. We may request verification of your identity before fulfilling your request to protect your privacy and security.",
                ],
              },
            ]}
          />

          <Section
            title="Third-Party Links and Services"
            des=""
            colorClass="text-indigo-500"
            lineColor="bg-gradient-to-r from-indigo-400 to-indigo-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "Our Platform may contain links to third-party websites, services, or applications. Please note that this Privacy Policy does not apply to third-party websites or services that you may access through our Platform. We encourage you to review the privacy policies of those third parties before providing any personal information to them. We are not responsible for the privacy practices or content of such third-party services.",
                ],
              },
            ]}
          />

          <Section
            title="Changes to This Privacy Policy"
            des=""
            colorClass="text-pink-500"
            lineColor="bg-gradient-to-r from-pink-400 to-pink-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements,, or other operational reasons.",
                  "When we make changes, we will update the 'Last Updated' date at the top of this page. If the changes are material, we will provide notice through our Platform or by other means as required by law.",
                  "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
                ],
              },
            ]}
          />

          <Section
            title="Communications from Us"
            des="We may occasionally send you service-related announcements when necessary, such as maintenance notifications, security updates, privacy alerts, or administrative communications. These messages are sent via SMS and are not promotional. You cannot opt out of these service-related announcements, as they are essential for account protection and keeping you informed about important changes to the Platform."
            colorClass="text-blue-500"
            lineColor="bg-gradient-to-r from-blue-400 to-blue-600"
            sectionArray={[
              {
                title: "",
                des: [
                  "We may occasionally send you service-related announcements when necessary, such as maintenance notifications, security updates, privacy alerts, or administrative communications. These messages are sent via SMS and are not promotional. You cannot opt out of these service-related announcements, as they are essential for account protection and keeping you informed about important changes to the Platform.",
                ],
              },
            ]}
          />

          <Section
            title="Cookie Policy"
            des="The capitalized terms used in this Cookie Policy, but not defined herein, shall have the meaning given in the Terms."
            colorClass="text-orange-500"
            lineColor="bg-gradient-to-r from-orange-400 to-orange-600"
            sectionArray={[
              {
                title: "What are cookies, pixels, and local storage?",
                des: [
                  "Cookies: Small files stored on your device as you browse the web. We use cookies to understand how people interact with our Platform and enhance its functionality",
                  "Pixels: Small snippets of code embedded in web pages or emails. These help us analyze engagement and improve the Platform’s performance.",
                  "Pixels: Small snippets of code embedded in web pages or emails. These help us analyze engagement and improve the Platform’s performance.",
                ],
              },
              {
                title: "Why do we use these technologies?",
                des: [
                  "Improve user experience by making navigation smoother and faster.",
                  "Retain authentication details to facilitate seamless access.",
                  "Store language preferences and location-based services.",
                  "Analyze Platform usage to enhance performance and security.",
                  "Deliver and measure advertising effectiveness in collaboration with our partners.",
                  "We do not use cookies to personally identify you. However, certain cookies may collect personally identifiable information such as your username or profile picture for functionality purposes.",
                ],
              },
              // {
              //   title: "Types of Cookies We Use",
              //   des: [
              //     "Necessary: Enables essential functions like login authentication and fraud prevention.",
              //     "Performance: Helps analyze how users interact with the Platform to improve its efficiency.",
              //     "Functionality: Remembers your preferences (e.g., language settings) and customizes the experience.",
              //     "Targeting/Advertising: Displays relevant ads based on browsing behavior.",
              //   ],
              // },
              {
                title: "Where Are These Technologies Used?",
                des: [
                  "We use cookies and similar technologies on our Platform and across partner websites integrated with our services. Third-party services may also use these technologies when you interact with their content through our Platform.",
                ],
              },
              {
                title: "Do We Use Third-Party Cookies?",
                des: [
                  "Yes, we work with external service providers who may set cookies on your device for analytics, advertising, and service delivery. We strive to disclose such third-party cookies, allowing you to decide whether to accept them.",
                ],
              },
              {
                title: "How Can You Control Cookies?",
                des: [
                  "Most browsers allow you to manage cookie settings, including blocking or receiving alerts about cookie usage. Please refer to your browser’s settings for more details. Disabling cookies may affect the Platform’s functionality and personalization features. If you access the Platform from multiple devices (e.g., smartphone, tablet, laptop), you must adjust cookie settings individually for each device.",
                ],
              },
              {
                title: "Changes to This Cookie Policy",
                des: [
                  "We may update this Cookie Policy periodically to reflect changes in our practices. Any significant updates will be posted here with a revised “Last Updated” date.",
                ],
              },
              {
                title: "Cookies Set in the Past",
                des: [
                  "If you disable cookies, we may still use information collected before your preference change, but we will no longer track new data using the disabled cookies.",
                ],
              },
            ]}
          />

          <div className="w-full mx-auto overflow-x-auto">
            <div className="flex justify-start items-center gap-4">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-[375px] w-[5px]"></div>
              <div>
                <p className="text-md font-bold pb-4">
                  Types of Cookies We Use
                </p>
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">
                        Type
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">
                        Purpose
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">
                        Personal Data Collection?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Necessary
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Enables essential functions like login authentication
                        and fraud prevention.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">No</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Performance
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Helps analyze how users interact with the Platform to
                        improve its efficiency.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        No (data is aggregated anonymously)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Functionality
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Remembers your preferences (e.g., language settings) and
                        customizes the experience.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        May collect disclosed personal data (e.g., username,
                        profile picture)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Targeting/Advertising
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        Displays relevant ads based on browsing behavior.
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        May collect IP address and usage data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* <Section
            title="Contact Us"
            des="For questions or concerns regarding our Privacy Policy, please contact our Grievance Officer:"
            colorClass="text-purple-500"
            lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
            sectionArray={[
              {
                title: "",
                des: ["Name: Mr. Nihar Ranjan Behera"],
              },
              {
                title: "",
                des: ["Email: support@heartconnect.app"],
              },
              {
                title: "",
                des: ["Phone: +91 63719 33595"],
              },
            ]}
          /> */}

          <div className="mt-5">
            <h1 className="text-purple-500 text-2xl font-semibold">
              Contact Us.
            </h1>
            <p className="text-md mt-3 pl-4">
              For questions or concerns regarding our Privacy Policy, please
              contact our Grievance Officer:
            </p>

            <div className="flex justify-start items-center gap-3 mt-3">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-[70px] w-[5px]"></div>
              <div className="text-md">
                <p>
                  <span className="font-semibold">Name :</span>{" "}
                  <span className="capitalize tracking-wide font-semibold">
                    Mr. Nihar Ranjan Behera
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Email :</span>{" "}
                  <span className="font-semibold tracking-wide">
                    support@heartconnect.app
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Phone :</span>{" "}
                  <span className="capitalize tracking-wide font-semibold">
                    +91 63719 33595
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};