import React from "react";
import Button from "./Button";
import artboard from "../assets/images/webp/Artboard.webp";
const Whatnex = () => {
  return (
    <section className=" pt-[40px] sm:pt-[80px]">
      <div className=" max-w-[1340px] mx-auto px-3">
        <div className="w-full relative z-[1] border-[1px] border-white  mb-[100px] overflow-hidden  rounded-[32px] px-[25px] py-[25px] sm:py-[66px]  lg:py-[163px] sm:px-[50px] lg:px-[100px]    bg-[url(./assets/images/webp/bg-gif.webp)] bg-fullsize bg-transparent bg-no-repeat">
          <div className="row flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full px-3">
              <h2
                data-aos="fade-down"
                className=" text-[#02CDCF] font-bold text-[24px] sm:text-[40px] font-Recharge leading-[30px] sm:leading-[50px]"
              >
                What is NexAi?
              </h2>
              <p
                data-aos="fade-up"
                className=" pt-4 font-Poppins font-normal text-base leading-[25px] text-[#B7B8BA]"
              >
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p
                data-aos="zoom-in"
                className=" pt-2 font-Poppins font-normal text-base leading-[25px] text-[#B7B8BA]"
              >
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <Button custum="mt-[40px]" text="Learn More" />
            </div>
            <div className="lg:w-1/2 w-full px-3 flex items-center">
              <div className=" relative flex justify-center items-center  z-[1]  ">
                <img
                  data-aos="zoom-in"
                  src={artboard}
                  alt="artboard"
                  className="max-w-[262px] mix-blend-multiply sm:max-w-[535px] w-full object-cover h-[264px] sm:h-[528px] relative z-[1] rounded-[49%]"
                />
                <div class="absolute max-w-[262px] sm:max-w-[535px] w-full rounded-full h-[264px] sm:h-[528px] bg-[#02CDCF] opacity-60  mix-blend-hue"></div>
                <div class="absolute w-[114px] sm:w-[228px] h-[114px] sm:h-[228px] rounded-[50%] bg-[#02CDCF] z-[1] bottom-[6%] right-[21%] blur-[100px] sm:blur-[180px]"></div>
              </div>
            </div>
          </div>
          <div className=" absolute z-[-1] max-w-[228px] max-h-[228px] w-full h-full  bottom-0 left-0 rounded-[999px] bg-[#02CDCF] blur-[228px]"></div>
          <div className=" absolute z-[-1] max-w-[228px] max-h-[228px] w-full h-full  top-[10%] lg:bottom-[20%] rounded-[999px]  right-[10%] bg-[#02CDCF] blur-[228px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Whatnex;
