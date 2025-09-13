import React from "react";
import Slider from "../../Components/Home/Slider";
import VdoScreenContainer from "../../Components/Home/VdoScreenContainer";
import AdvertisementSection from "../../Components/Home/AdvertisementSection";
import CardSection from "../../Components/Home/CardSection";
import Testimonial from "../../Components/Home/Testimonial";
import Faq from "../../Components/Home/Faq";

const Home = () => {
  return (
    <React.Fragment>
      <Slider />
      <VdoScreenContainer />
      <AdvertisementSection />
      <CardSection />
      <Testimonial />
      <Faq />
    </React.Fragment>
  );
};

export default Home;
