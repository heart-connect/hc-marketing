import React from "react";
import { OurApproach } from "../../Components/AboutUs/OurApproach";
import { OurTeam } from "../../Components/AboutUs/OurTeam";
// import { Newsletter } from "../../Components/AboutUs/Newsletter";
import { AboutSoftTouch } from "../../Components/AboutUs/AboutSoftTouch";
import { SecondaryNav } from "../../Components/Common/SecondaryNav";
import abtImage from "../../Assets/contact-us.jpg";

const About = () => {
  return (
    <React.Fragment>
      <SecondaryNav
        banner={abtImage}
        page_name="About Us"
        desc="Heart Connect brings people together through genuine and engaging experiences, helping you find love, friendship, and meaningful connections."
      />
      <AboutSoftTouch />
      <OurApproach />
      {/* <OurTeam /> */}
    </React.Fragment>
  );
};

export default About;
