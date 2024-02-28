import React from "react";
import rightcircel from "../assets/images/webp/rightcircele.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const blockchain = [
  {
    number: "1",
    text: "Security and Privacy",
    aos: "fade-down",
  },
  {
    number: "2",
    text: "Transparent and Reliable Data Management",
    translate: "111px",
    aos: "fade-up",
  },
  {
    number: "3",
    text: "Self-learning and Personalization",
    aos: "fade-down",
  },
  {
    number: "4",
    text: "Automated and Transparent Transactions",
    translate: "111px",
    aos: "fade-up",
  },
];
const Blockchain = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1,
    speed: 6000,
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
  const showblockcahincard = blockchain.map((e, index) => (
    <div key={index}>
      <div
        data-aos={e.aos}
        style={{ marginTop: e.translate }}
        className={`w-full px-3`}
      >
        <div className=" group min-h-[340px] sm:min-h-[365px] pt-[70px] bg-[url(./assets/images/webp/Polygon.webp)] bg-fullsize bg-no-repeat">
          <div className=" flex justify-center items-center flex-col">
            <p className=" text-white font-Recharge font-bold text-[32px] leading-[51px] text-center p-[4px_21px] bg-black rounded-[999px]  shadow-[0px_4px_16px_0px_#02CDCF99_inset]">
              {e.number}
            </p>
            <p className=" group-hover:text-[#02CDCF] duration-300 text-xl pt-[30px] font-bold leading-[32px] text-white text-center font-Recharge max-w-[212px]">
              {e.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <section
      className="blockchain  relative z-[3] pt-[16px] md:pt-[80px] pb-[25px] md:pb-[100px] overflow-x-clip"
      id="market"
    >
      <div className=" max-w-[1040px] mx-auto px-3 ">
        <h2
          data-aos="fade-down"
          className=" relative z-[2] text-center text-[#02CDCF] font-Recharge  font-bold text-[24px] sm:text-[40px] leading-[30px] sm:leading-[50px]"
        >
          Blockchain & AI technology
        </h2>
        <p
          data-aos="fade-down"
          className=" relative z-[2] text-[#B3B3B3] font-Poppins text-base leading-[25px] text-center max-w-[997px] pt-4"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <h3
          data-aos="fade-down"
          className=" relative z-[2] font-Recharge font-bold text-base sm:text-xl leading-[32px] text-center max-w-[684px] text-white mx-auto mt-5  sm:mt-[96px]"
        >
          By building the software on blockchain, Nexai provides the following
          advantages
        </h3>
        <Slider className="pt-[60px] relative z-[1]" {...settings}>
          {showblockcahincard}
        </Slider>
      </div>
      <img
        src={rightcircel}
        alt="rightcircel"
        className=" absolute right-0 top-[0%] z-[1]"
      />
      <div className="max-w-[228px] max-h-[228px] w-full z-[1]  h-full absolute max-md:hidden left-[-12%] top-[28%] bg-[#02CDCF] blur-[170px]"></div>
      <div className="max-w-[302px] max-h-[262px] w-full z-[1]  h-full absolute  right-[-12%] top-[13%] bg-[#02CDCF] blur-[217px]"></div>
    </section>
  );
};

export default Blockchain;
