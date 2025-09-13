import React, { Fragment } from "react";
import contactUsImage from "../../Assets/contact-us.jpg";
import { SecondaryNav } from "../Common/SecondaryNav";
import Section from "../Common/Section";

const TermAndConditionView = () => {
  return (
    <Fragment>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Terms And Conditions"
        desc="Welcome to Heart Connect, the premier dating app. By using Heart Connect, you agree to our Terms and Conditions, Privacy Policy, and confirm you are at least 18 years old."
      />

      <div className="min-h-screen bg-gray-100 flex items-center pt-6 justify-center">
        <div className="p-4 w-full max-w-6xl">
          <h4 className="text-xl font-semibold mb-4 text-center">
            Welcome to Heart Connect
          </h4>
          <p className="text-gray-700 mb-6 text-center px-4">
            These Terms of Use ("Terms") govern your use of the Heart Connect
            mobile application (the "Platform") operated by Heart Connect
            ("Heart Connect," "Company," "we," "us," or "our"). By accessing or
            using the Platform, you agree to these Terms. If you do not agree,
            please refrain from using the Platform.
          </p>
          <p className="text-gray-700 mb-6 text-center px-4">
            <span className="text-pink-600 font-semibold">Heart Connect</span>{" "}
            is a major product of{" "}
            <span className="text-pink-600 font-semibold">
              Ushabati Services Pvt Ltd
            </span>
            , the company behind its development and management. Ushabati
            Services Pvt Ltd oversees the app’s operations, ensuring a smooth
            user experience, implementing security measures, and continuously
            improving its features to cater to modern dating needs.
          </p>
          <p className="text-gray-700 text-center px-4">
            We have established certain rules for using our Platform, which are
            outlined in this document. Please read these Terms carefully, along
            with our Privacy Policy and other applicable guidelines linked here.
            Your continued use of the Platform constitutes your acceptance of
            these Terms.
          </p>

          <Section
            title="Changes to Terms & Services"
            des="Our Platform is dynamic and may evolve over time. We reserve the right to modify, suspend, or discontinue any feature, service, or functionality of the Platform at our sole discretion."
            colorClass="text-blue-500"
            lineColor="bg-gradient-to-r from-blue-400 to-blue-600"
            sectionArray={[
              {
                des: "Updates may occur without prior notice, but where required by law, we will seek your consent. We recommend reviewing this page periodically to stay informed about any changes.",
              },
            ]}
          />

          <Section
            title="Who Can Use Our Services"
            des="Heart Connect is designed to help individuals connect, interact, and build meaningful relationships. To use our services:"
            colorClass="text-orange-500"
            lineColor="bg-gradient-to-r from-orange-400 to-orange-600"
            sectionArray={[
              {
                des: "You must be at least 18 years old or meet the legal age requirement in your jurisdiction. You must be legally permitted to use our services. If you are accessing the Platform on behalf of a company or organization, you confirm that you have the authority to bind them to these Terms.",
              },
            ]}
          />

          <Section
            title="Account Registration & Access"
            des="To use Heart Connect, you must create an account by providing your phone number and verifying it via a One-Time Password (OTP). By registering, you: "
            colorClass="text-purple-500"
            lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
            sectionArray={[
              {
                des: "Grant us permission to access certain device features such as contacts, SMS, storage, gallery, and camera (only with your consent). Agree to provide accurate and up-to-date information. Are responsible for maintaining the confidentiality of your login details.",
              },
              {
                des: "If we detect suspicious activity or a breach of our guidelines, we reserve the right to suspend or terminate your account.",
              },
            ]}
          />

          <Section
            title="Privacy & Data Security"
            des="We value your privacy and are committed to protecting your personal data."
            colorClass="text-green-500"
            lineColor="bg-gradient-to-r from-green-400 to-green-600"
            sectionArray={[
              {
                des: "We collect necessary details such as your phone number, gender, and name to personalize your experience. All collected data is stored securely on [Hosting Provider - AWS/Google Cloud/etc.] and is subject to their respective privacy policies. For a detailed understanding of how we handle your data, refer to our Privacy Policy.",
              },
            ]}
          />

          <Section
            title="Virtual Coins & Refund Policy "
            des="Heart Connect offers virtual coins ('Coins') that users can purchase and use within the Platform for premium features, gifts, and profile customization."
            colorClass="text-purple-500"
            lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
            sectionArray={[
              {
                title: "Purchasing Coins",
                des: "Coins are available for purchase at the displayed price, and all payments are processed through authorized payment gateways. Once purchased, coins will be credited to your account. Coins are non-refundable and cannot be exchanged for real currency.",
              },
              {
                title: "Using Coins",
                des: "Coins can be used to buy virtual gifts, profile enhancements, and other in-app items. Coins cannot be transferred, resold, or combined with other promotions unless explicitly stated. Any violation of our Coin policy may result in account suspension or termination. ",
              },
              {
                title: "Virtual Gifts",
                des: "Gifts purchased using Coins are non-refundable and cannot be converted back into Coins or real money. We reserve the right to modify or remove any virtual items at our discretion.",
              },
            ]}
          />

          <Section
            title="Your Responsibilities & Commitments "
            des="By using Heart Connect, you agree to:"
            colorClass="text-red-500"
            lineColor="bg-gradient-to-r from-red-400 to-red-600"
            sectionArray={[
              {
                title: "Honest & Respectful Interactions",
                des: "Do not impersonate others or provide false information. Treat all users with respect and follow our Community Guidelines.",
              },
              {
                title: "Security & Account Safety",
                des: "Keep your login credentials secure. Install necessary anti-malware software to protect your device.",
              },
              {
                title: "Prohibited Activities",
                des: "You must not: Share obscene, pornographic, or illegal content. Engage in harassment, discrimination, or hate speech. Use the Platform for fraud, spam, or any unlawful activity.",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            Violating these terms may lead to content removal, account
            suspension, or legal action.
          </p>

          <Section
            title="Content Rights & Ownership "
            colorClass="text-yellow-500"
            lineColor="bg-gradient-to-r from-yellow-400 to-yellow-600"
            sectionArray={[
              {
                des: "You retain ownership of any content (photos, videos, messages) you share. By posting on Heart Connect, you grant us a non-exclusive, royalty-free license to use, display, and distribute your content within the Platform. If you delete your account, some content may still remain visible if shared with others.",
              },
            ]}
          />

          <Section
            title="Liability & Platform Use"
            des=""
            colorClass="text-indigo-500"
            lineColor="bg-gradient-to-r from-indigo-400 to-indigo-600"
            sectionArray={[
              {
                des: "Heart Connect acts as an intermediary platform and is not responsible for user interactions. We do not endorse or verify user-generated content. We are not liable for any damages arising from your use of the Platform.",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            If required by law, we may share information with law enforcement
            authorities to ensure compliance with legal obligations.
          </p>

          <Section
            title="Termination of Services"
            des="We reserve the right to suspend, terminate, or restrict access to the Platform if:"
            colorClass="text-pink-500"
            lineColor="bg-gradient-to-r from-pink-400 to-pink-600"
            sectionArray={[
              {
                des: "You violate these Terms or our Community Guidelines. We detect fraudulent, illegal, or harmful activity. We need to comply with legal or regulatory requirements.",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            Upon termination, any unused Coins or virtual assets may be
            forfeited.
          </p>

          <Section
            title="Governing Law & Dispute Resolution"
            des=""
            colorClass="text-teal-500"
            lineColor="bg-gradient-to-r from-teal-400 to-teal-600"
            sectionArray={[
              {
                des: "These Terms are governed by the laws. Any disputes shall be resolved through arbitration or the appropriate legal channels.",
              },
            ]}
          />

          <Section
            title="Permissions You Give to Us"
            des="By using Heart Connect, you agree to these Terms and grant us certain permissions to enhance your experience. These include:"
            colorClass="text-cyan-500"
            lineColor="bg-gradient-to-r from-cyan-400 to-cyan-600"
            sectionArray={[
              {
                title: " Automatic Downloads and Updates ",
                des: "To ensure the best experience, we continuously update our Platform and services. You may be required to download the latest version of the Heart Connect mobile application and install updates as they become available. Updates may include security patches, bug fixes, performance improvements, and new features. You agree that we may automatically update the application on your device without requiring additional consent.",
              },
              {
                title: " Permission to Use Cookies",
                des: "We use cookies and similar tracking technologies (such as pixel tags, web beacons, and mobile device IDs) to collect and store information about your usage of the Platform. These help us: Personalize and improve your experience. Analyze Platform performance and security.Provide relevant advertisements and content. For more details on how we use cookies and your available choices,please refer to our Cookie Policy.",
              },
              {
                title: "Data Retention",
                des: "We retain certain user data to provide seamless services and comply with legal obligations. We retain certain user data to provide seamless services and comply with legal obligations. You have the right to request the deletion of your data, subject to legal and operational requirements.",
              },
            ]}
          />

          <Section
            title="Our Agreement and What Happens If We Disagree"
            colorClass="text-lime-500"
            lineColor="bg-gradient-to-r from-lime-400 to-lime-600"
            sectionArray={[
              {
                title: "Who Has Rights Under These Terms ",
                des: "These Terms grant rights only to you as an individual user. You cannot transfer your rights or obligations under these Terms to any third party without our consent. However, we may assign our rights and obligations, including in cases of mergers, acquisitions, or corporate restructuring.",
              },
              {
                title: " How Will We Handle Disputes",
                des: "All disputes arising from these Terms shall be governed by the laws of [Your Jurisdiction], with exclusive jurisdiction granted to the courts of [City, Country].",
              },
            ]}
          />

          <Section
            title="Grievance Redressal Mechanism"
            des="We are committed to user privacy and safety. If you have concerns regarding your Heart Connect experience, you may contact our Grievance Officer:"
            colorClass="text-teal-500"
            lineColor="bg-gradient-to-r from-teal-400 to-teal-600"
            sectionArray={[
              {
                des: "Reporting Violations: You can report user profiles and content that violate our Community Guidelines using the in-app report feature. Email Support: Send complaints to [Support Email] for prompt assistance. Legal & Policy Concerns: If you have questions about your account, data privacy, or terms of service, contact our designated Grievance Officer: Grievance Officer: [Full Name] Email: [Email Address] Address: [Company Address] ",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            We will address and resolve your concerns within 45 days of
            receiving your complaint.
          </p>

          <Section
            title="Limitation of Liability"
            des="We are not responsible for any loss or damage resulting from:"
            colorClass="text-gray-500"
            lineColor="bg-gradient-to-r from-gray-400 to-gray-600"
            sectionArray={[
              {
                des: "Inaccuracies or incomplete information provided by users. Service interruptions, security breaches, or unauthorized access to user data. User interactions and communications on the Platform. ",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            The Platform and Services are provided "as is" and "as available"
            without any guarantees regarding their uninterrupted or error-free
            operation.
          </p>
          <p className="text-md mt-4 font-medium">
            If we are found liable for any damages, our total liability shall be
            limited to the amount paid by you (if any) for using the Platform in
            the month preceding the claim.
          </p>
          <p className="text-md mt-4 font-medium">
            Additionally, if our company undergoes a merger, acquisition,
            bankruptcy, or asset transfer, user data may be transferred to a new
            entity. In such cases, you will be notified in advance and given the
            option to delete your account if you do not agree with the changes.
          </p>

          <Section
            title="Indemnification"
            des="You agree to indemnify and hold harmless Heart Connect, its affiliates, officers, employees, and partners from any claims, damages, or expenses arising from:"
            colorClass="text-teal-500"
            lineColor="bg-gradient-to-r from-teal-400 to-teal-600"
            sectionArray={[
              {
                title: "Entire Agreement",
                des: "Your use of the Platform and Services. Your violation of these Terms or any applicable laws. Infringement of third-party rights, including intellectual property or privacy rights.Any misconduct, negligence, or fraudulent activity on your part.",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            This indemnification obligation will continue to apply even after
            the termination of these Terms.
          </p>
          <Section
            title="Unsolicited Material"
            des=""
            colorClass="text-blue-800"
            lineColor="bg-gradient-to-r from-blue-600 to-blue-800"
            sectionArray={[
              {
                title: "",
                des: "We appreciate feedback and suggestions but are under no obligation to compensate or maintain confidentiality for unsolicited ideas. Any suggestions provided by users may be used by us without restriction.",
              },
            ]}
          />

          <Section
            title="General Provisions"
            des="You agree to indemnify and hold harmless Heart Connect, its affiliates, officers, employees, and partners from any claims, damages, or expenses arising from:"
            colorClass="text-purple-500"
            lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
            sectionArray={[
              {
                title: "Severability:",
                des: " If any part of these Terms is deemed unenforceable, the remaining sections shall continue in full force and effect.",
              },
              {
                title: "Waiver:",
                des: "  Our failure to enforce any right under these Terms shall not be considered a waiver of that right.",
              },
              {
                title: "Amendments:",
                des: " Changes to these Terms must be in writing and signed by Heart Connect to be valid.",
              },
              {
                title: "Reservation of Rights:",
                des: " We reserve all rights not expressly granted in these Terms.",
              },
            ]}
          />
          <p className="text-md mt-4 font-medium">
            By using Heart Connect, you confirm your understanding and
            acceptance of these Terms.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default TermAndConditionView;
