import React, { useEffect, useRef, useState } from "react";
import backtop from "../assets/images/webp/backtotop.webp";
const Backtop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div
      onClick={() =>
        setPosition({ ...position, position: { top: 0, left: 0 } })
      }
      className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
      ref={scrollTop}
    >
      <div className=" rounded-[50%] w-[45px] duration-300  cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] bg-[#02CDCF] hover:bg-[#02cccf98] flex justify-center items-center">
        <img
          src={backtop}
          alt="backtop"
          //   className=" bg-[white] hover:bg-[#BD7D41] duration-300 rounded-full"
        />
      </div>
    </div>
  );
};

export default Backtop;
