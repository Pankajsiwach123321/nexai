import React from "react";
import leftcircel from "../assets/images/webp/lefftcircel.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Nexai = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      className=" relative z-[1] pb-[80px] pt-[25px] md:pt-[100px] overflow-x-clip"
      id="token"
    >
      <div className=" max-w-[1140px] mx-auto px-3">
        <h2
          data-aos="fade-down"
          className=" font-bold font-Recharge text-[24px] sm:text-[40px] leading-[30px] sm:leading-[50px] text-center text-[#02CDCF]"
        >
          NexAi does all this. And more.
        </h2>
        <p
          data-aos="fade-up"
          className=" font-Poppins text-[#B3B3B3] pt-4 font-normal text-base leading-[25px] text-center max-w-[912px] mx-auto"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <Slider className=" mt-[90px]" {...settings} speed="6000">
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, measure this table
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, Turn on music
              </p>
            </div>
          </div>
        </Slider>
        <Slider className=" mt-[40px]" {...settings} speed="5000" rtl="true">
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, measure this table
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, Turn on music
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
        </Slider>
        <Slider className=" mt-[40px]" {...settings} speed="4000">
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
          <div>
            <div className="p-[53px_43px] cursor-grab group h-full mx-3 shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl">
              <p className=" font-bold max-w-[254px] group-hover:text-[#02CDCF] duration-300 mx-auto text-2xl leading-[38px] text-center font-Recharge text-white">
                NexAi, set alarm of 5:00 am
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <img
        src={leftcircel}
        alt="leftcircel"
        className=" absolute left-0 top-[-10%] z-[-1]"
      />
      <div className="max-w-[302px] max-sm:hidden max-h-[262px] w-full z-[-1]  h-full absolute right-[-12%] top-0 bg-[#02CDCF] blur-[217px]"></div>
    </section>
  );
};

export default Nexai;
