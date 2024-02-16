import React from "react";
import aipowered from "../assets/images/webp/Artboardimg2.webp";
import Button from "./Button";
const Aipowered = () => {
  return (
    <section className=" relative z-[1]">
      <div
        className="w-full h-[106px]  max-md:hidden blur-2xl  translate-y-[-80px]   bg-[linear-gradient(180deg,#04040400_24.07%,rgba(4,4,4,0)_96%)]
"
      ></div>
      <div className=" max-w-[1140px] mx-auto px-3 pt-[20px] md:pt-[80px]">
        <div className="row">
          <div className="md:w-1/2 w-full px-3 flex items-center">
            <div className=" relative z-[1]">
              <img
                data-aos="zoom-in"
                src={aipowered}
                alt="aipowered"
                className="w-full"
              />
              <div className=" absolute left-[17%] sm:left-[31%] z-[-1] top-[24%] max-w-[231px] w-full max-h-[231px] h-full blur-[227px] rounded-[231px] bg-[#02CDCF]"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 max-md:pt-6">
            <h2
              data-aos="fade-down"
              className=" font-Recharge font-bold text-[30px] sm:text-[40px] text-[#02CDCF] leading-[40px] sm:leading-[50px]"
            >
              Ai-Powered Home Assistant
            </h2>
            <p
              data-aos="zoom-in"
              className=" font-Poppins font-normal text-base leading-[25px] text-[#B3B5B5] pt-[16px]"
            >
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p
              data-aos="zoom-in"
              className=" font-Poppins font-normal text-base leading-[25px] text-[#B3B5B5] pt-[6px]"
            >
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p
              data-aos="zoom-in"
              className=" font-Poppins font-normal text-base leading-[25px] text-[#B3B5B5] pt-[6px]"
            >
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <Button text="Learn More" custum=" mt-5 sm:mt-10" />
          </div>
        </div>
      </div>
      <div className="max-w-[228px] max-md:hidden max-h-[228px] w-full z-[-1]  h-full absolute right-[0%] top-[37%] bg-[#02CDCF] blur-[200px]"></div>
    </section>
  );
};

export default Aipowered;
