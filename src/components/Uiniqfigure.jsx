import React from "react";
import { Awareness, Message, Plushistory, Settinghistory } from "./Icon";

const Uiniqfigure = () => {
  return (
    <section className="mt-[-2px] pt-[100px] md:mb-[80px]" id="about">
      <div className="max-w-[1340px] mx-auto px-3">
        <div className="w-full border-[1px] border-white h-[810px] mb-[25px] md:mb-[100px] overflow-hidden  rounded-[32px] pt-[30px]  md:pt-[80px] px-[25px] sm:px-[100px] bg-[url(./assets/images/webp/bgservices.webp)] bg-fullsize bg-no-repeat">
          <div className=" sticky top-0 ">
            <h2
              data-aos="zoom-in"
              className=" relative z-[2] font-Recharge font-bold text-[24px] sm:text-[40px] leading-[30px] sm:leading-[50px] text-white text-center"
            >
              Unique features
            </h2>
            <p
              data-aos="zoom-in"
              className="  relative z-[2] font-Poppins font-normal text-base leading-[25px] text-center max-w-[397px] mx-auto text-[#B7B7B7] pt-[16px]"
            >
              ability to engage in natural, fluent conversations in over 15
              languages,
            </p>
          </div>
          <div className="row  max-h-[599px]   myscrol overflow-hidden overflow-y-auto relative z-[1] mt-5 sm:mt-[40px] ">
            <div className="md:w-1/2 w-full px-3 mt-[40px] ">
              <div className=" group rounded-2xl w-full md:max-w-[364px] bg-white p-[30px_24px_44px_24px]">
                <Settinghistory />
                <h2 className=" group-hover:text-[#02CDCF] duration-300 pt-[15px] sm:pt-[30px] font-Recharge font-bold text-base sm:text-xl leading-[22px] sm:leading-[32px] text-black max-w-[304px]">
                  Remote Access and File Management
                </h2>
                <p className=" group-hover:text-black duration-300 font-Poppins font-normal text-[#535656] text-base leading-[25px] pt-[10px] max-w-[316px]">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
              <div className=" group rounded-2xl w-full md:max-w-[364px] bg-white p-[30px_24px_44px_24px] mt-5 md:mt-[150px]">
                <Message />
                <h2 className=" group-hover:text-[#02CDCF] duration-300 pt-[15px] sm:pt-[30px] font-Recharge font-bold text-base sm:text-xl leading-[22px] sm:leading-[32px] text-black max-w-[304px]">
                  Autonomous and Natural Language Communication
                </h2>
                <p className=" group-hover:text-black duration-300 font-Poppins font-normal text-[#535656] text-base leading-[25px] pt-[10px] max-w-[316px]">
                  Nexai goes beyond standard home assistants by taking proactive
                  initiatives and engaging in natural language conversations. It
                  communicates with you as if you're talking to a friend,
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full px-3 md:flex md:flex-col md:justify-end md:h-[1281px] mt-3 mb-5 items-end ">
              <div className=" group rounded-2xl md:max-w-[364px] bg-white p-[30px_24px_44px_24px]">
                <Plushistory />
                <h2 className=" group-hover:text-[#02CDCF] duration-300 pt-[15px] sm:pt-[30px] font-Recharge font-bold text-base sm:text-xl leading-[22px] sm:leading-[32px] text-black max-w-[304px]">
                  Real-time Home Monitoring
                </h2>
                <p className=" group-hover:text-black duration-300 font-Poppins font-normal text-[#535656] text-base leading-[25px] pt-[10px] max-w-[316px]">
                  Nexai utilizes the hardware sensors placed throughout your
                  home to understand your location and deliver relevant
                  information or actions. For instance, if you're in the bedroom
                  and there's a smart TV present, Nexai will automatically
                  display on the TV screen.
                </p>
              </div>
              <div className=" group rounded-2xl md:max-w-[364px] bg-white p-[30px_24px_44px_24px] mt-5 md:mt-[150px] mb-5">
                <Awareness />
                <h2 className=" group-hover:text-[#02CDCF] duration-300 font-Recharge pt-[15px] sm:pt-[30px] font-bold text-base sm:text-xl leading-[22px] sm:leading-[32px] text-black max-w-[304px]">
                  Intelligent Contextual Awareness
                </h2>
                <p className=" group-hover:text-black duration-300 font-Poppins font-normal text-[#535656] text-base leading-[25px] pt-[10px] max-w-[316px]">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uiniqfigure;
