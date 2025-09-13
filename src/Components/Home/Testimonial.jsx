import React, { useEffect } from "react";
import image from "../../Assets/happy-loving.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./Testimonial.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const testimonials = [
    {
      name: "Tapan Kumar",
      role: "Software Developer",
      image:
        "https://res.cloudinary.com/dvxsd4rds/image/upload/v1723874964/jgqys2tjngykyd8ickx1.jpg",
      text: "Heart Connect helped me find the love of my life. The app's features are top-notch, making it easy to connect with genuine people. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Executive",
      image:
        "https://res.cloudinary.com/dvxsd4rds/image/upload/v1723874965/kzxlgdnwipkxtlwtyhy8.jpg",
      text: "I've tried several dating apps, but Heart Connect stands out for its user-friendly interface and real connections. I met my GF here, and we're happier than ever.",
      rating: 5,
    },
    {
      name: "Manoranjan Behera",
      role: "Entrepreneur",
      image:
        "https://res.cloudinary.com/dvxsd4rds/image/upload/v1723874965/hllgb78mmeprsmtv8s9c.jpg",
      text: "Heart Connect made dating fun again! The app is full of interesting people, and the experience has been fantastic. I found someone special, and I couldn't be happier.",
      rating: 4,
    },
    {
      name: "Subhranshu Sekhar",
      role: "Graphic Designer",
      image:
        "https://res.cloudinary.com/dvxsd4rds/image/upload/v1723874965/py7fjw596pdhctcpjfpp.jpg",
      text: "The video call feature on Heart Connect made all the difference for me. It’s more personal than just texting, and it’s how I met my current partner. Great app!",
      rating: 5,
    },
    {
      name: "Rakesh Kumar",
      role: "Financial Analyst",
      image:
        "https://res.cloudinary.com/dvxsd4rds/image/upload/v1723874965/b0h6fvuv9lunwvdaknts.jpg",
      text: "Heart Connect is a game-changer in the dating world. The safety features gave me confidence, and I’ve met some truly amazing people here.",
      rating: 4,
    },
  ];

  return (
    <div className="relative">
      <div
        className="lg:px-20 md:px-10 px-5 py-20 overflow-x-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          data-aos="fade-left"
          className="flex justify-center md:flex-row flex-col items-center gap-10 md:gap-20 py-5"
        >
          <div className="text-center md:text-left">
            <div className="text-[#c51369] text-lg tracking-wider font-semibold mb-4">
              <span className="border-b-2 border-[#c51369] pb-1">
                Testimonials
              </span>
            </div>

            <div className="text-[#ffffff] mt-8 text-2xl md:text-4xl tracking-wider font-bold">
              Hear from Our Happy Members
            </div>

            <div className="text-lg tracking-wide text-gray-200 my-6">
              Elevate your dating journey with ❤️Heart Connect❤️! Discover
              features and connect with amazing people.
            </div>
          </div>
        </div>

        <div className="max-w-full mx-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="p-4 flex flex-col md:flex-row justify-center items-center bg-[#424241b6] rounded-[30px] max-w-lg mx-auto my-8 md:mx-0 md:my-12 md:p-8">
                  <div className="text-white text-center md:text-left md:flex-1 ">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 mx-auto md:mx-0"
                    />
                    <div className="mb-3 flex justify-center md:justify-start items-center">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    <p className="text-sm md:text-base leading-relaxed mb-4 tracking-wider text-justify">
                      {testimonial.text}
                    </p>

                    <div className="flex justify-center md:justify-start items-center">
                      <p className="text-md md:text-xl tracking-wide text-[#f74c9b] font-bold">
                        - {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} size={20} color="#ef8f04" className="mr-1" />);
    } else {
      stars.push(
        <FaRegStar key={i} size={20} color="#606261" className="mr-1" />
      );
    }
  }
  return <div className="flex">{stars}</div>;
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default Testimonial;
