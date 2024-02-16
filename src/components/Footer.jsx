import React from "react";
import { Facebook, Telegram, Twitter } from "./Icon";

const Footer = () => {
  return (
    <footer className=" overflow-x-clip relative z-[1] bg-[url(./assets/images/webp/footerbg.webp)] bg-fullsize bg-no-repeat mt-[25px] sm:mt-[89px]">
      <div className=" max-w-[1140px] mx-auto px-3 sm:pt-[70px]">
        <div className="row pt-[25px] sm:pt-[70px]">
          <div className="lg:w-7/12 sm:w-1/2 w-full px-3 sm:pt-[36px]">
            <p className=" font-bold text-base leading-[25px] font-Recharge text-[#B3B4B4] max-w-[356px]">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className=" flex gap-3 items-center mt-5">
              <a
                className=" group"
                href="https://www.facebook.com/"
                target="_blanck"
              >
                <span className="  border-[2px] hover:py-1 rounded-full border-transparent hover:border-y-[#02CDCF] duration-300 inline-block group">
                  <Facebook />
                </span>
              </a>
              <a
                className=" group duration-300"
                href="https://twitter.com/account/access"
                target="_blanck"
              >
                <span className=" border-[2px] hover:py-1 rounded-full border-transparent hover:border-y-[#02CDCF] duration-300  inline-block group">
                  <Twitter />
                </span>
              </a>
              <a
                className=" group duration-300"
                href="https://web.telegram.org/a/"
                target="_blanck"
              >
                <span className="  border-[2px] hover:py-1 rounded-full border-transparent hover:border-y-[#02CDCF] duration-300  inline-block group">
                  <Telegram />
                </span>
              </a>
            </div>
          </div>
          <div className=" lg:w-5/12 sm:w-1/2 w-full max-sm:pt-6 px-3">
            <div className="row">
              <div className="w-1/2 px-3">
                <ul>
                  <li className=" text-white font-bold text-[16px] lg:text-lg leading-[21px] font-Recharge">
                    Quick links
                  </li>
                </ul>
                <ul>
                  <li className="mt-5">
                    <a
                      href="#home"
                      className=" navhover  hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#market"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#token"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Tokens
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#nexchat"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      NexChat
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#about"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 px-3">
                <ul>
                  <li className=" text-white font-bold text-[16px] lg:text-lg leading-[21px] font-Recharge">
                    Information's
                  </li>
                </ul>
                <ul>
                  <li className="mt-5">
                    <a
                      href="#"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Phone
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      terms
                    </a>
                  </li>
                  <li className="mt-5">
                    <a
                      href="#"
                      className=" navhover hover:text-[#fff] duration-300 font-Recharge font-bold text-base leading-[19px] text-[#B5B8B7]"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" font-Recharge font-bold text-base leading-[19px] text-center text-[#B3B6B6] border-t-[2px] py-[20px] mt-[30px] border-t-[#B3B6B6]">
          @Copyright.nexai
        </p>
        <div className="max-w-[228px] max-h-[228px] w-full z-[-1]  h-full absolute right-[-15%] top-[0%] bg-[#02CDCF] blur-[175px]"></div>
      </div>
    </footer>
  );
};

export default Footer;
