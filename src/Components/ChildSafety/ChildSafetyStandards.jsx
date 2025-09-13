import React, { Fragment } from "react";
// import childSafetyImage from "../../Assets/child-safety.jpg"; // You'll need to provide this image
import contactUsImage from "../../Assets/contact-us.jpg";
import { SecondaryNav } from "../Common/SecondaryNav";
import Section from "../Common/Section";

const ChildSafetyStandards = () => {
    return (
        <Fragment>
            <SecondaryNav
                banner={contactUsImage}
                page_name="Child Safety Standards"
                desc="At Heart Connect, we are committed to ensuring the safety and well-being of children using our platform. Our Child Safety Standards outline the measures we take to protect young users."
            />

            <div className="min-h-screen bg-gray-100 flex items-center pt-6 justify-center">
                <div className="p-4 w-full max-w-6xl">
                    <h4 className="text-xl font-semibold mb-4 text-center tracking-wider">
                        Child Safety at Heart Connect
                    </h4>
                    <p className="text-gray-700 mb-6 text-center px-4 tracking-wide">
                        We are dedicated to creating a safe and positive environment for all users, especially children. Our Child Safety Standards are designed to protect young users from potential risks and ensure their experience on our platform is secure and enriching.
                    </p>

                    <Section
                        title="Age Restrictions and Verification"
                        des="Learn about our age restrictions and how we verify user ages to protect minors."
                        colorClass="text-blue-500"
                        lineColor="bg-gradient-to-r from-blue-400 to-blue-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Minimum age requirement of 13 years old to create an account.",
                                    "Parental consent required for users under 18.",
                                    "Age verification process using reliable methods.",
                                    "Separate, age-appropriate experiences for different age groups."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Content Moderation"
                        des="Understand how we monitor and moderate content to ensure it's appropriate for young users."
                        colorClass="text-green-500"
                        lineColor="bg-gradient-to-r from-green-400 to-green-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Automated content filtering to remove inappropriate material.",
                                    "Human moderation team to review flagged content.",
                                    "User reporting system for inappropriate content or behavior.",
                                    "Regular updates to our content guidelines and moderation policies."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Privacy and Data Protection"
                        des="Learn about the extra steps we take to protect children's privacy and personal information."
                        colorClass="text-purple-500"
                        lineColor="bg-gradient-to-r from-purple-400 to-purple-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Limited data collection for users under 18.",
                                    "Parental controls and oversight options.",
                                    "Strict data retention and deletion policies.",
                                    "Compliance with children's privacy laws such as COPPA."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Safe Communication"
                        des="Discover the measures we've implemented to ensure safe communication for young users."
                        colorClass="text-orange-500"
                        lineColor="bg-gradient-to-r from-orange-400 to-orange-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Restricted messaging features for underage users.",
                                    "Monitoring of communication for potential grooming or bullying.",
                                    "Educational resources on safe online communication.",
                                    "Easy-to-use blocking and reporting tools."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Education and Awareness"
                        des="Learn about our efforts to educate young users, parents, and guardians about online safety."
                        colorClass="text-red-500"
                        lineColor="bg-gradient-to-r from-red-400 to-red-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "In-app safety tips and guidelines.",
                                    "Regular safety campaigns and workshops.",
                                    "Partnerships with child safety organizations.",
                                    "Resources for parents and guardians on digital parenting."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Reporting and Support"
                        des="Understand how we handle reports of child safety concerns and provide support."
                        colorClass="text-indigo-500"
                        lineColor="bg-gradient-to-r from-indigo-400 to-indigo-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Dedicated child safety team to handle reports and concerns.",
                                    "24/7 support for urgent child safety issues.",
                                    "Collaboration with law enforcement when necessary.",
                                    "Regular transparency reports on child safety metrics."
                                ],
                            },
                        ]}
                    />

                    <Section
                        title="Contact Us"
                        des="If you have any questions about our Child Safety Standards or need to report a concern, please contact us."
                        colorClass="text-pink-500"
                        lineColor="bg-gradient-to-r from-pink-400 to-pink-600"
                        sectionArray={[
                            {
                                title: "",
                                des: [
                                    "Child Safety Team at Heart Connect",
                                    " Email:nihar.hec@gmail.com",
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ChildSafetyStandards;

