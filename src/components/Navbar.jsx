import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(true);
  };
  if (show === false) {
    document.body.classList.add("max-sm:overflow-hidden");
  } else {
    document.body.classList.remove("max-sm:overflow-hidden");
  }
  return (
    <nav className=" py-[10px] sm:py-[38px] ">
      <div className=" max-w-[824px] ml-auto mr-auto lg:mr-[120px] px-3">
        <div className=" flex justify-between items-center">
          <ul
            className={`${
              show ? "left-[-100%]" : "left-0"
            } flex items-center max-sm:bg-black gap-[20px] max-sm:fixed max-sm:z-50 max-sm:flex-col top-0 max-sm:w-full max-sm:h-full max-sm:min-h-screen max-sm:justify-center transition-all ease-linear duration-300`}
          >
            <li>
              <a
                onClick={handleClick}
                href="#home"
                className=" font-normal text-base leading-[24px] text-center font-Poppins text-white navhover hover:text-[#02CDCF] duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#market"
                className=" font-normal text-base leading-[24px] text-center font-Poppins text-white navhover hover:text-[#02CDCF] duration-300"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#about"
                className=" font-normal text-base leading-[24px] text-center font-Poppins text-white navhover hover:text-[#02CDCF] duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#nexchat"
                className=" font-normal text-base leading-[24px] text-center font-Poppins text-white navhover hover:text-[#02CDCF] duration-300"
              >
                NexChat
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href="#token"
                className=" font-normal text-base leading-[24px] text-center font-Poppins text-white navhover hover:text-[#02CDCF] duration-300"
              >
                Tokens
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Button text="Sign Up" />
            </li>
          </ul>
          <div
            onClick={() => setShow(!show)}
            className="cursor-pointer sm:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
          >
            <span
              className={`${
                show
                  ? ""
                  : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
              } bg-[#02CDCF] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                show ? "" : "hidden"
              } bg-[#02CDCF] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                show ? "" : "rotate-[-50deg] translate-y-[-50%]"
              } bg-[#02CDCF] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
