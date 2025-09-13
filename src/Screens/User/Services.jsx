import React from 'react'
import { SecondaryNav } from '../../Components/Common/SecondaryNav'
import abtImage from "../../Assets/contact-us.jpg";
import DownloadedApp from '../../Components/Home/DownloadedApp';
import CardSection from '../../Components/Home/CardSection';
import Testimonial from '../../Components/Home/Testimonial';

const Services = () => {
  return (
    <React.Fragment>
      <SecondaryNav
        banner={abtImage}
        page_name="Services"
        desc="Welcome to ❤️Heart Connect❤️, where hearts entwine! Discover, connect, and create your love story with someone truly special."
      />

      <DownloadedApp />
      <CardSection />
      <Testimonial />
    </React.Fragment>
  )
}

export default Services
