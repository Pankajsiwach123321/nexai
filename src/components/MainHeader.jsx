import React from "react";
import Button from "./Button";

const MainHeader = () => {
  return (
    <main id="home" className="grow flex  items-center max-lg:py-[50px] ">
      <div className=" xl:min-w-[1140px] md:min-w-[768px] lg:min-w-[1024px] px-3 mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2500"
          data-aos-delay="3000"
          className=" font-Recharge text-white text-[35px] sm:text-[55px] sm:leading-[75px] md:text-[60px]  max-w-[577px]"
        >
          <span className="text-[#02CDCF]">Nexai</span> is an advanced
          AI-powered home assistant
        </h1>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2500"
          data-aos-delay="3000"
          className=" font-Poppins  font-normal text-base leading-[25px] text-[#B2B3B3]"
        >
          Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
          odio.
        </p>
        <Button custum="sm:mt-[51px] mt-[25px]" text="Know More" />
      </div>
    </main>
  );
};

export default MainHeader;
