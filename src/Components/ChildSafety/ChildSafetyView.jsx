import React, { Fragment } from "react";
import contactUsImage from "../../Assets/contact-us.jpg";
import { SecondaryNav } from "../Common/SecondaryNav";
import Section from "../Common/Section";

export const ChildSafetyView = () => {
  const sections = [
    {
      title: "1. Age Restriction & Verification",
      des: "Heart Connect is strictly for users aged 18 and above. We implement age verification measures to prevent underage users from accessing the platform. If we discover any user below 18, their account will be permanently suspended or removed.",
      colorClass: "text-blue-500",
      lineColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "2. Reporting Underage Users ",
      des: "If you suspect an underage user on Heart Connect, please report them through the in-app reporting feature or email us at care@heartconnect.app. We will take immediate action to investigate and remove any minor accounts.",
      colorClass: "text-green-500",
      lineColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      title: "3. Parental Guidance & Awareness",
      des: "We encourage parents and guardians to educate children about online safety and monitor their internet activities. Resources on online safety can be found through organizations like Cyber Safety Awareness Programs.",
      colorClass: "text-red-500",
      lineColor: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      title: "4. Protection Against Predatory Behavior",
      des: "We have a zero-tolerance policy against any form of child exploitation, harassment, or inappropriate content. Any attempts to engage with minors or exploitative behavior will be reported to law enforcement authorities.",
      colorClass: "text-purple-500",
      lineColor: "bg-gradient-to-r from-purple-400 to-purple-600",
    },

    {
      title: "5. AI & Moderation for Safer Interactions ",
      des: "Our platform uses AI-powered content moderation and manual monitoring to detect and restrict any suspicious or inappropriate activity. Users engaging in harmful behavior will be permanently banned from the platform.",
      colorClass: "text-yellow-500",
      lineColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
    {
      title: "6.  Collaboration with Authorities",
      des: "We cooperate with law enforcement agencies and child protection organizations to combat online exploitation. In cases of reported misconduct involving minors, we will provide necessary support to authorities for investigation.",
      colorClass: "text-blue-500",
      lineColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
  ];

  return (
    <Fragment>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Child Safety"
        desc="Child safety on Heart Connect is our top priority. Please review the information below to learn more about our policies and measures to ensure a safe environment for children."
      />
      <div className="min-h-screen bg-gray-100 flex items-center pt-6 justify-center">
        <div className="p-4 w-full max-w-6xl">
          <h4 className="text-xl font-semibold mb-4 text-center">
            Child Safety
          </h4>
          <p className="text-gray-700 mb-6 text-center px-4">
            At Heart Connect, we are committed to creating a safe and secure
            environment for all users. Our platform is designed for adults
            seeking meaningful connections, and we take strict measures to
            prevent minors from accessing or engaging with the platform.
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
          <p className="text-md mt-4 font-medium">
            At Heart Connect, safety is our priority, and we continuously work
            to ensure a secure and respectful dating environment for all users.
          </p>
          <p className="text-md mt-2 font-medium">
            If you have concerns regarding child safety, please contact our
            support team immediately.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ChildSafetyView;