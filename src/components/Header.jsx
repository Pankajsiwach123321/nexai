import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <header className="xl:px-[30px]">
      <div className="w-full lg:min-h-[745px] bg-[url(./assets/images/webp/headerimg.webp)]  bg-no-repeat bg-cover max-md:bg-right md:bg-fullsize mt-[10px] flex flex-col">
        <Navbar />
        <MainHeader />
      </div>
    </header>
  );
};

export default Header;
