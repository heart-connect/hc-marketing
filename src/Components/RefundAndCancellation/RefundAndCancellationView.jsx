import React, { Fragment } from "react";
import contactUsImage from "../../Assets/contact-us.jpg";
import { SecondaryNav } from "../Common/SecondaryNav";
import Section from "../Common/Section";

export const RefundAndCancellationView = () => {
  const sections = [
    {
      title: "1. Purchase Policy",
      des: "Digital coins can be purchased within the app using real money. All purchases are final and non-refundable, except where required by law. All purchases are final and non-refundable, except where required by law. Coins cannot be transferred, exchanged, or resold under any circumstances.",
      colorClass: "text-blue-500",
      lineColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "2. Refund Policy",
      des: "Heart Connect does not offer refunds for any purchases once the transaction is successfully completed. However, if your payment is deducted but coins are not credited to your account, please reach out to us at *** nihar.hec@gmail.com *** for assistance. Refunds will only be considered in cases of verified technical errors or failed transactions.",
      colorClass: "text-green-500",
      lineColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      title: "3. Cancellation Policy",
      des: "Heart Connect does not support cancellations for coin purchases. Users can choose to delete their Heart Connect account at any time, but any unused digital coins will not be eligible for a refund.",
      colorClass: "text-red-500",
      lineColor: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      title: "4. Dispute Resolution",
      des: "If you have any disputes regarding purchases, refunds, or account-related concerns, contact our support team at [insert contact email]. Our team will investigate and resolve disputes on a case-by-case basis in accordance with our policies.",
      colorClass: "text-yellow-500",
      lineColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      title: "5. Service Overview",
      des: "",
      colorClass: "text-purple-500",
      lineColor: "bg-gradient-to-r from-purple-400 to-purple-600",
      sectionArray: [
        {
          title: "",
          des: "Heart Connect is an online platform where users can engage through voice calls, video calls, and chat features using digital coins. We are committed to fostering meaningful connections in a safe environment. ",
        },
      ],
    },
    {
      title: "6. Using Digital Coins ",
      des: "Digital coins are required to initiate calls, send messages, and access premium features within the app. Coins can be purchased via secure payment gateways within the platform.",
      colorClass: "text-yellow-500",
      lineColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      title: "7. Earning Coins",
      des: "Users can earn coins by engaging with others on the platform. Earned coins may be converted to real money, subject to our Coin Conversion Policy.",
      colorClass: "text-blue-500",
      lineColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "8. Coin Conversion Policy",
      des: "Coins earned through eligible activities can be converted to real money in accordance with our terms. Conversion rates, eligibility, and payout conditions are subject to change without prior notice.",
      colorClass: "text-green-500",
      lineColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
  ];

  return (
    <Fragment>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Refund And Cancellation"
        desc="Refunds and cancellations on Heart Connect are subject to our policy. Please review the information below for details on refunds."
      />
      <div className="min-h-screen bg-gray-100 flex items-center pt-6 justify-center">
        <div className="p-4 w-full max-w-6xl">
          <h4 className="text-xl font-semibold mb-4 text-center">
            Refund and Cancellation Policy
          </h4>
          <p className="text-gray-700 mb-6 text-center px-4">
            At Heart Connect, we strive to offer a seamless user experience.
            Please review our Refund and Cancellation Policy before making any
            purchases.
          </p>
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              des={section.des}
              colorClass={section.colorClass}
              lineColor={section.lineColor}
              sectionArray={section.sectionArray || []}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RefundAndCancellationView;