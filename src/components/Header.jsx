import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import layer from "../assets/images/webp/layerheader.png";

const Header = () => {
  return (
    <header className="xl:px-[30px] relative z-[2]">
      <div className="w-full max-w-[1440px] mx-auto lg:min-h-[745px] bg-[url(./assets/images/webp/headerimg.png)]  bg-no-repeat bg-cover max-md:bg-right md:bg-fullsize mt-[10px] flex flex-col">
        <Navbar />
        <MainHeader />
      </div>
      <div className="-z-[1]  max-w-[262px] absolute max-h-[262px] w-full h-full rounded-[999px] bg-[#02CDCF] opacity-30 left-[-12px] top-[120px] blur-[177px]"></div>
      <div className="w-full h-[106px]  max-md:h idden blur-2xl  translate-y-[-85px]">
        <img src={layer} alt="layer" />
      </div>
    </header>
  );
};

export default Header;
