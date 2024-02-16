import React from "react";
import Button from "./Button";
import artboard from "../assets/images/webp/Artboard.webp";
const Whatnex = () => {
  return (
    <div className=" pt-[40px] sm:pt-[80px]">
      <div className=" max-w-[1340px] mx-auto px-3">
        <div className="w-full relative z-[1] border-[1px] border-white  mb-[100px] overflow-hidden  rounded-[32px] px-[25px] py-[25px] sm:py-[66px]  lg:py-[163px] sm:px-[50px] lg:px-[100px]    bg-[url(./assets/images/webp/bg-gif.webp)] bg-fullsize bg-transparent bg-no-repeat">
          <div className="row flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full px-3">
              <h2
                data-aos="fade-down"
                className=" text-[#02CDCF] font-bold text-[20px] sm:text-[40px] font-Recharge leading-[25px] sm:leading-[50px]"
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
              <div className=" relative -hidden rounded-[999px] mix-blend-lighten z-[1]  ">
                <img
                  data-aos="zoom-in"
                  src={artboard}
                  alt="artboard"
                  className=" w-full mix-blend-lighten rounded-[500px] "
                />
                {/* <div className=" max-w-[468px] max-h-[468px] z-[-1] w-full h-full mix-blend-lighten rounded-full bg-[#02CDCF] blur-[150px] absolute top-[2%] left-[6%]"></div> */}
              </div>
            </div>
          </div>
          <div className=" absolute z-[-1] max-w-[228px] max-h-[228px] w-full h-full  bottom-0 left-0 rounded-[999px] bg-[#02CDCF] blur-[228px]"></div>
          <div className=" absolute z-[-1] max-w-[228px] max-h-[228px] w-full h-full  top-[10%] lg:bottom-[20%] rounded-[999px]  right-[10%] bg-[#02CDCF] blur-[228px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Whatnex;
