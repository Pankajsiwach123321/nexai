import React from "react";
import Button from "./Button";
import rightcircel from "../assets/images/webp/rightcircele.webp";

const Ready = () => {
  return (
    <section className=" relative z-[1] overflow-x-clip pt-[25px] md:pt-[150px]">
      <div className=" max-w-[1140px] mx-auto px-3">
        <div className=" flex items-center justify-between gap-5 flex-col md:flex-row">
          <h2
            data-aos="fade-down"
            className=" max-md:text-center font-Recharge max-w-[517px] font-bold text-[24px] sm:text-[40px] text-white leading-[30px] sm:leading-[52px]"
          >
            Ready to get started{" "}
            <span className=" text-[#02CDCF]" data-aos="fade-up">
              Talk to us Today
            </span>
          </h2>
          <Button text="Get Started" />
        </div>
      </div>
      <img
        src={rightcircel}
        alt="rightcircel"
        className=" absolute right-0 top-[-13%] z-[1]"
      />
      <div className="max-w-[228px] max-sm:hidden max-h-[228px] w-full z-[-1]  h-full absolute left-[-12%] top-[5%] bg-[#02CDCF] blur-[175px]"></div>
    </section>
  );
};

export default Ready;
