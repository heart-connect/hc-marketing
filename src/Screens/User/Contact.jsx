import React from "react";
import { GetInTouch } from "../../Components/ContactUs/GetInTouch";
import { SecondaryNav } from "../../Components/Common/SecondaryNav";
import contactUsImage from "../../Assets/contact-us.jpg";

const Contact = () => {
  return (
    <React.Fragment>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Contact Us"
        desc="Uncover genuine connections with our groundbreaking dating app. Sign up today and begin your path to lasting relationships!"
      />
      <GetInTouch />
    </React.Fragment>
  );
};

export default Contact;
