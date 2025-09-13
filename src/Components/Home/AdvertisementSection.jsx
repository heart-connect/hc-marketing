import React, { useEffect } from "react";
import TrustSite from "./TrustSite";
import AOS from "aos";
import "aos/dist/aos.css";
import DownloadedApp from "./DownloadedApp";

const AdvertisementSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        <div className="px-4 md:px-16 mt-6">
          <div
            data-aos="zoom-in-down"
            className="text-[#0d0b0b] text-center mt- text-2xl md:text-4xl tracking-wider font-bold"
          >
            The Ultimate Destination for True Matches
          </div>
          <TrustSite />
        </div>
      </React.Fragment>

      <React.Fragment>
        <DownloadedApp />
      </React.Fragment>
    </React.Fragment>
  );
};

export default AdvertisementSection;
